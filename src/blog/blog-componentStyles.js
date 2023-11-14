import { css } from "lit-element";
export default css`
body {
    background-color: #ffffff;
    color: #6b5b95;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: #6b5b95;
    color: #ffffff;
    text-align: center;
    padding: 20px;
  }

  header h1 {
    font-size: 28px;
    margin: 0;
  }

  header p {
    font-size: 16px;
  }

  nav {
    background-color: #6b5b95;
    color: #ffffff;
    padding: 10px;
  }

  nav ul {
    list-style: none;
    text-align: center;
    padding: 0;
  }

  nav li {
    display: inline;
    margin-right: 10px;
  }

  nav a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
  }

  main {
    margin: 20px;
    padding: 20px;
  }

  article {
    margin-bottom: 30px;
  }

  article h2 {
    color: #6b5b95;
    font-size: 24px;
  }

  article p {
    text-align: justify;
  }

  footer {
    background-color: #6b5b95;
    color: #ffffff;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;