/*
Decodes an array of bytes into an object.
- fPort: LoRaWAN fPort number
- bytes: array of bytes, e.g. [225, 230, 255, 0]

References:
  https://www.chirpstack.io/application-server/use/device-profiles/#custom-javascript-codec-functions
  https://wiki.dragino.com/index.php?title=Lora/GPS_Shield#Example5_--_Connect_TTN_Mapper_Example
*/

function Decode(fPort, bytes) {
  var lat = (bytes[0] | bytes[1] << 8 | bytes[2] << 16 | (bytes[2] & 0x80 ? 0xFF << 24 : 0)) / 10000;
  var long = (bytes[3] | bytes[4] << 8 | bytes[5] << 16 | (bytes[5] & 0x80 ? 0xFF << 24 : 0)) / 10000;
  
  return {
    location: {
      latitude: lat,
      longitude: long
    }
  };
}
