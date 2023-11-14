import { css } from "lit-element";

export default css`

body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }

  .card {
    max-width: 300px;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }

  .card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card-body {
    padding: 20px;
  }

  .card-body h5 {
    color: #333;
  }

`