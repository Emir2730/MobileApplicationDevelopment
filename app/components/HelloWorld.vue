<template>
    <Page class="page">
        <ActionBar title="Geolocation" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <Image src="~/images/map-marker-icon.png" height="60" />
                <Button text="Get My Location" @tap="getLocation"
                    class="btn btn-primary" />

                <Label :text="'Latitude: ' + lat" class="lbl" />
                <Label :text="'Longitude: ' + lon" class="lbl" />
                <Label :text="'Speed: ' + speed" class="lbl" />
                <Label :text="'Address: ' + addr" class="lbl"
                    textWrap="true" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    const geolocation = require("nativescript-geolocation");
    const {
        Accuracy
    } = require("tns-core-modules/ui/enums");
    export default {
        data() {
            return {
                lat: "",
                lon: "",
                speed: "",
                addr: ""
            };
        },
        methods: {
            getLocation() {
                geolocation
                    .getCurrentLocation({
                        desiredAccuracy: Accuracy.high,
                        maximumAge: 5000,
                        timeout: 20000
                    })
                    .then(res => {
                        this.lat = res.latitude;
                        this.lon = res.longitude;
                        this.speed = res.speed;
                        fetch(
                                "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
                                res.latitude +
                                "," +
                                res.longitude +
                                "&key=cdcd5710-0206-4bb8-89c6-b9eaf4cbe1f6"
                            )
                            .then(response => response.json())
                            .then(r => {
                                this.addr = r.results[0]
                                    .formatted_address;
                            });
                    });
            }
        },
        mounted() {
            geolocation.enableLocationRequest();
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>