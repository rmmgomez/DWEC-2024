import { View, Map, Feature } from "ol";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { useGeographic } from "ol/proj";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style.js";
import { Point } from "ol/geom";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";

useGeographic();

const place = [-3.5935, 41.1061];

const view = new View({
    center: place,
    zoom: 18,
});

const map = new Map({
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
    ],
    target: "map",
    view: view,
});

const vectorLayer = new VectorLayer({
    map: map,
    source: new VectorSource({
        features: [],
    }),
});

function createMarker(coordinates, color = "#3399CC", fill = "#fff") {
    const positionFeature = new Feature({ geometry: new Point(coordinates) });
    positionFeature.setStyle(
        new Style({
            image: new CircleStyle({
                radius: 9,
                fill: new Fill({
                    color: color,
                }),
                stroke: new Stroke({
                    color: fill,
                    width: 3,
                }),
            }),
        })
    );

    return positionFeature;
}

vectorLayer.getSource().addFeature(createMarker(place));

// Creación del mapa
// Función createMarker(...)

const marker = createMarker(place);
vectorLayer.getSource().addFeature(marker);

map.on("click", (e) => {
    marker.setGeometry(new Point(e.coordinate));
    view.setCenter(e.coordinate);
});
const autocomplete = new GeocoderAutocomplete(
    document.getElementById("autocomplete"),
    "0154a6e35a5e49fdb0798015e02f0729",
    { lang: "es" }
);

autocomplete.on("select", (location) => {
    marker.setGeometry(new Point(location.geometry.coordinates));
    view.setCenter(location.geometry.coordinates);
});