const net = require('net');
const sock = new net.Socket;

//we connected, new start reading data.
sock.on('connect',() => {
  sock.write('GET /en/ HTTP/1.1 \r\n');
  sock.write('Host: istc.am');
  sock.write('\r\n\r\n');
});
sock.setEncoding('utf-8');
const total_data=[];
sock.on('data', d => total_data.push(d));
sock.on('end',
  () => console.log(total_data.reduce((prev, total) => prev + total)));
  sock.connect({
  port:80,
  host:'istc.am'
})

const data = (data) => {
  const dataArr = data.reduce((prev, total) =>prev + total).split('\r\n\r\n');
  const head = dataArr[0].split('\r\n');
  const headArr = {};
  for (let i of head){
    let d = i.split(':');
    headArr[d[0]] = d[1];
  }
  const body = dataArr[1].split('\r\n');
  console.log(headArr);
  console.log(body);
}
