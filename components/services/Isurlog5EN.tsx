import React from "react";

export default function SpecificationsEN() {
  return (
    <>
      <h4 className="title-content mb-16">Specifications</h4>

      <h5 className="mb-16">Built-in I/O for external sensors/detectors</h5>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "32px" }}>
        <tbody>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              9-24V 1A sensor power supply (software adjustable) + 5V/0.5A.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              4 active/passive 4-20mA inputs, with an auto-resetting protection fuse.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              1 digital input, potential-free contact.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              1 RS485 input, up to 32 sensors + QWIIC connector for I2C sensors.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              1 input for 2, 3 or 4-wire PT100 sensors.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              3 solid-state relay digital outputs: 1×2A + 2×0.4A.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px" }}>
              3 GPIOs configurable as inputs or outputs.
            </td>
          </tr>
        </tbody>
      </table>

      <h5 className="mb-16">I/O expansion module</h5>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              Modbus RTU.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              4× 4/20 mA analog inputs, active or passive loops.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              2× status digital inputs + 2 counting digital inputs.
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderBottom: "1px solid #e0e0e0" }}>
              On/off and proportional control of automatic hydraulic valves (pressure and flow regulators with latching solenoid valves).
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px" }}>
              Indoor temperature and relative humidity measurement.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
