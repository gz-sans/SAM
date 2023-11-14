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

  main {
    margin: 20px;
    padding: 20px;
  }

  section {
    margin-bottom: 30px;
  }

  section h2 {
    color: #6b5b95;
    font-size: 24px;
  }

  section p {
    text-align: justify;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #6b5b95;
    font-weight: bold;
  }

  form {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #6b5b95;
    border-radius: 5px;
  }

  input[type="submit"] {
    background-color: #6b5b95;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`