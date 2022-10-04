import React from "react";
import * as eva from "@eva-design/eva";
import { StyleSheet } from "react-native";
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
} from "@ui-kitten/components";
import { default as theme } from "./styles/theme.json";
import CustomSelect from "./components/customSelect";
import coffeeSizes from "./utils/mocks/coffeeSize.mock";
import coffeeTypes from "./utils/mocks/coffeeType.mock";
import CustomInput from "./components/CustomInput";
import styles from "./styles/main.style";
import paymentMethods from "./utils/mocks/paymentMethod.mock";
import hasErrors from "./utils/functions/hasError";
import getTotal from "./utils/functions/getTotal";

export default function App() {
  const { ...methods } = useForm();
  const [error, setError] = React.useState<FieldValues>({});
  const [formData, setFormData] = React.useState<FieldValues>({});

  const submitHandler = (data: FieldValues) => {
    setFormData(data);
    setError({});
  };

  const errorHandler = (data: FieldValues) => {
    setError(data);
    setFormData({});
  };

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <Layout style={styles.container}>
        <Text category='h2'>StarBosco App</Text>
        <FormProvider {...methods}>
          <CustomSelect
            name='coffeeSize'
            label='Seleccione el tamaño del café'
            collection={coffeeSizes}
            style={styles.selects}
            status={hasErrors(error, "coffeeSize")}
            rules={{ required: "Select an item" }}
          />
          <CustomSelect
            name='coffeeType'
            label='Seleccione el tipo de café'
            collection={coffeeTypes}
            style={styles.selects}
            status={hasErrors(error, "coffeeType")}
            rules={{ required: "Select an item" }}
          />
          <Layout style={styles.paymentMethodContainer}>
            <CustomSelect
              rules={{ required: "Select an item" }}
              name='paymentMethod'
              label='Seleccione el tipo de café'
              status={hasErrors(error, "paymentMethod")}
              collection={paymentMethods}
              style={[styles.selects, styles.paymentMethodSelect]}
            />
            <CustomInput
              keyboardType='numeric'
              name='quantity'
              status={hasErrors(error, "quantity")}
              label='Cantidad de cafes'
              placeholder='Cantidad de cafes'
              rules={{ required: "Set a number of coffees" }}
              style={styles.paymentMethodInput}
            />
          </Layout>
        </FormProvider>
      </Layout>
      <Layout style={styles.resumeContainer}>
        <Text category='h2'>Resumen</Text>
        <Layout style={[styles.resumeDetailsContainer, styles.genericLayout]}>
          <Layout style={[styles.genericLayout, styles.detail]}>
            <Text>Cantidad Solicitada: </Text>
            <Text>{formData.quantity && formData.quantity}</Text>
          </Layout>
          <Layout style={[styles.genericLayout, styles.detail]}>
            <Text>Tamano: </Text>
            <Text>
              {formData.coffeeSize &&
                coffeeSizes.find((item) => item.id === formData.coffeeSize)
                  ?.name}
            </Text>
          </Layout>
          <Layout style={[styles.genericLayout, styles.detail]}>
            <Text>Tipo de Cafe: </Text>
            <Text>
              {formData.coffeeType &&
                coffeeTypes.find((item) => item.id === formData.coffeeType)
                  ?.name}
            </Text>
          </Layout>
          <Layout style={[styles.genericLayout, styles.detail]}>
            <Text>Tipo de Pago: </Text>
            <Text>
              {formData.coffeeType &&
                paymentMethods.find(
                  (item) => item.id === formData.paymentMethod
                )?.name}
            </Text>
          </Layout>
          <Layout style={[styles.genericLayout, styles.detail]}>
            <Text>Descuento %: </Text>
            <Text>
              {formData.paymentMethod &&
                `${
                  (paymentMethods.find(
                    (item) => item.id === formData.paymentMethod
                  )?.discount as number) * 100
                }%`}
            </Text>
          </Layout>
          <Layout style={[styles.genericLayout, styles.detail]}>
            <Text>Total a pagar: </Text>
            <Text>{formData.quantity && `$${getTotal(formData)}`}</Text>
          </Layout>
        </Layout>
        <Button onPress={methods.handleSubmit(submitHandler, errorHandler)}>
          Calcular
        </Button>
      </Layout>
    </ApplicationProvider>
  );
}
