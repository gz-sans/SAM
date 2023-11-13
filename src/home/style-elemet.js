import { css } from "lit-element";


export default css`

body {
  font-family: 'Alfa Slab One', sans-serif;
}

.navbar {
  background-color: #61428C;
}

.navbar-brand {
  color: white !important;
}

.container-1 {
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.col {
  flex: 1;
  padding: 20px;
}

.title-h6 {
  font-size: 20px;
  color: #4B6AFF;
}

h4 {
  font-size: 24px;
  color: black;
  margin: 10px 0;
}

p {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

.container-2 {
  background-color: #A784D9;
  padding: 10%;
  text-align: center;
  border-radius: 8px;
  color: black;
  
}

.apoyo {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 2%;
}

.apoyo li {
  width: 30%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.2s;
  background-color: #f8f8f8;
}

.apoyo li:hover {
  transform: translateY(-5px);
  background-color: #f0f0f0;
}

.apoyo h3 {
  font-size: 20px;
  margin: 0;
}

.apoyo p {
  font-size: 14px;
}

.apoyo a {
  display: inline-block;
  background-color: #61428C;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.apoyo a:hover {
  background-color: #61428C;
}

.imagen {
  width: 120px;
  height: 80px;
}

.btn-lg{
  background-attachment: fixed;
}

footer {
  background-color: #61428C;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer p {
  margin: 0;
  color: #fff;
}

footer ul {
  list-style: none;
  padding: 0;
  display: flex;
}

footer ul li {
  margin: 0 20px;
}

footer a {
  color: #fff;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}`