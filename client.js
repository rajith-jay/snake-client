const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host:'165.227.47.243', // IP address here,
    port:50541 // PORT number here,
  });

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: RUF");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

connect();

module.exports = connect;