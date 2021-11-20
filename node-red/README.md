# Node-RED flows for ChirpStack's HTTP and MQTT integrations

## HTTP integration
Requires that the data is sent as a POST request to http://{node-red-ip}:{node-red-port}/{endpoint}.

Default values: {node-red-ip}: localhost, {node-red-port}: 1880, {endpoint}: location

## MQTT integration
Requires that an MQTT broker is running at {mqtt-broker-ip}:{mqtt-broker-port} and that the data is published to the application/{app-id}/device/{dev-eui}/event/{event-type} topic.

Default values: {mqtt-broker-ip}: localhost, {mqtt-broker-port}: 1883, {app-id}: 1, {dev-eui}: adb6f0b21951000a, {event-type}: up
