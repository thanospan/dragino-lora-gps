/**
 * References
 * https://wiki1.dragino.com/index.php/Lora/GPS_Shield#TTN_Mapper_side
 * https://www.chirpstack.io/docs/chirpstack/use/device-profiles.html
**/
function decodeUplink(input) {
  let bytes = input.bytes;
  let fPort = input.fPort;
  let variables = input.variables;
  
  let lat = (bytes[0] | bytes[1] << 8 | bytes[2] << 16 | (bytes[2] & 0x80 ? 0xFF << 24 : 0)) / 10000;
  let long = (bytes[3] | bytes[4] << 8 | bytes[5] << 16 | (bytes[5] & 0x80 ? 0xFF << 24 : 0)) / 10000;
  
  return {
    data: {
      location: {
        latitude: lat,
        longitude: long
      } 
    }
  };
}
