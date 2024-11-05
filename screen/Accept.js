import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import KeyboardAvoiding from "../components/KeyboardAvoiding";
import {
  MapHeader,
  HeaderLogo,
  HeaderMenu,
  AcceptInnerContainer,
  FormArea,
  InputLabel,
  RequestTextInput,
  AcceptBtn,
  BtnText,
} from "../components/styles";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api"; // Assuming this file exports an Axios instance configured with baseURL

const Accept = ({ navigation }) => {
  const [requesterMarkerPosition, setRequesterMarkerPosition] = useState(null);
  const [userMarkerPosition, setUserMarkerPosition] = useState(null);

  const [initialValues, setInitialValues] = useState({
    need: "",
    description: "",
  });

  const mapRegion = {
    latitude: 34.07757,
    longitude: 73.22633,
    latitudeDelta: 0.045,
    longitudeDelta: 0.045,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const h_receiver_id = await AsyncStorage.getItem("h_rec_id");
        const rescue_id = await AsyncStorage.getItem("rescue_id");
        const h_doner_id = await AsyncStorage.getItem("userId");

        if (h_receiver_id && h_doner_id && rescue_id) {
          // Fetch problem details based on rescueId
          const response = await api.get(`/problem?rescue_id=${rescue_id}`);
          setInitialValues({
            need: response.data.need, // assuming this matches your API response
            description: response.data.description,
          });

          // Fetch donor location based on donorId
          const donorLocationResponse = await api.get(
            `/d-location?h_doner_id=${h_doner_id}&rescue_id=${rescue_id}`
          );
          setUserMarkerPosition(donorLocationResponse.data);

          // Fetch receiver location based on receiverId
          const receiverLocationResponse = await api.get(
            `/r-location?h_receiver_id=${h_receiver_id}&rescue_id=${rescue_id}`
          );
          setRequesterMarkerPosition(receiverLocationResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAccept = async (values) => {
    try {
      const rescueId = await AsyncStorage.getItem("rescueId");
      if (rescueId) {
        await api.put(`/update-status?rescue_id=${rescueId}&status=process`);
        navigation.navigate("Complete");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setRequesterMarkerPosition(coordinate);
  };

  return (
    <KeyboardAvoiding>
      <View style={styles.container}>
        <MapHeader>
          <HeaderLogo
            resizeMode="cover"
            source={require("../assets/img/logo.png")}
          />
          <HeaderMenu>
            <Ionicons
              name="arrow-back-sharp"
              size={40}
              onPress={() => navigation.navigate("Home")}
            />
          </HeaderMenu>
        </MapHeader>
        <MapView style={styles.map} region={mapRegion} onPress={handleMapPress}>
          {requesterMarkerPosition && (
            <Marker
              coordinate={requesterMarkerPosition}
              title="Receiver's Location"
            >
              <Ionicons name="location-outline" size={45} color="black" />
            </Marker>
          )}
          {userMarkerPosition && (
            <Marker
              coordinate={userMarkerPosition}
              title="Donor's Location"
              pinColor="blue"
            >
              <Ionicons name="location-outline" size={45} color="red" />
            </Marker>
          )}
          {requesterMarkerPosition && userMarkerPosition && (
            <Polyline
              coordinates={[
                {
                  latitude: requesterMarkerPosition.latitude,
                  longitude: requesterMarkerPosition.longitude,
                },
                {
                  latitude: userMarkerPosition.latitude,
                  longitude: userMarkerPosition.longitude,
                },
              ]}
              strokeWidth={4}
              strokeColor="blue"
            />
          )}
        </MapView>
        <AcceptInnerContainer>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={handleAccept}
          >
            {({ handleChange, handleBlur, handleSubmit, values, touched }) => (
              <FormArea>
                <MyTextInput
                  label="Need"
                  placeholder="Need"
                  onChangeText={handleChange("need")}
                  onBlur={handleBlur("need")}
                  value={values.need}
                  touched={touched.need}
                  editable={false}
                />
                <MyTextInput
                  label="Description"
                  placeholder="Description"
                  onChangeText={handleChange("description")}
                  onBlur={handleBlur("description")}
                  value={values.description}
                  touched={touched.description}
                  multiline
                  style={{ height: 160, textAlignVertical: "top" }}
                  editable={false}
                />
                <AcceptBtn onPress={handleSubmit}>
                  <BtnText>Accept</BtnText>
                </AcceptBtn>
              </FormArea>
            )}
          </Formik>
        </AcceptInnerContainer>
      </View>
    </KeyboardAvoiding>
  );
};

const MyTextInput = ({ label, ...props }) => {
  return (
    <View>
      <InputLabel>{label}</InputLabel>
      <RequestTextInput {...props} />
    </View>
  );
};

export default Accept;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

// //  using google map api
// // import polyline from "@mapbox/polyline";
// // useEffect(() => {
// //   // Fetch route coordinates when component mounts
// //   fetchRoute();
// // }, []);

// // const fetchRoute = async () => {
// //   try {
// //     const response = await axios.get(
// //       `https://maps.googleapis.com/maps/api/directions/json`,
// //       {
// //         params: {
// //           origin: `${requesterMarkerPosition.latitude},${requesterMarkerPosition.longitude}`,
// //           destination: `${userMarkerPosition.latitude},${userMarkerPosition.longitude}`,
// //           key: YOUR_GOOGLE_MAPS_API_KEY,
// //         },
// //       }
// //     );

// //     const route = response.data.routes[0].overview_polyline.points;
// //     const decodedRoute = polyline.decode(route);

// //     const coordinates = decodedRoute.map((point) => ({
// //       latitude: point[0],
// //       longitude: point[1],
// //     }));

// //     setRouteCoordinates(coordinates);
// //   } catch (error) {
// //     console.error("Error fetching route:", error);
// //   }
// // };

// // const handleAccept = async (values) => {
// //   console.log(values);
// //   // Handle form submission logic here
// //   navigation.navigate("Complete");
// // };

// // const handleMapPress = (event) => {
// //   const { coordinate } = event.nativeEvent;
