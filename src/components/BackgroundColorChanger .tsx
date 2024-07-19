import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import "../style/backgroundColor.css";
import { useState } from "react";

const BackgroundColorChanger = () => {
  const [dark, setDark] = useState(false);
  const toggleColor = () => {
    const root = document.documentElement;
    const currentColor = getComputedStyle(root)
      .getPropertyValue("--bg-color")
      .trim();
    const newColor = currentColor === "#fff" ? "#000000" : "#fff";
    root.style.setProperty("--bg-color", newColor);

    const section = document.querySelectorAll("section");
    section.forEach((section) => {
      const textColor = newColor === "#fff" ? "white" : "#1B1F23";
      section.style.backgroundColor = textColor;
      const bgColor = getComputedStyle(section)
        .getPropertyValue("--bg-section")
        .trim();
      const newBg =
        textColor === "white"
          ? `20px 20px 60px #d9d9d9,
      -20px -20px 60px #ffffff`
          : `20px 20px 60px #333333, -20px -20px 60px #000000`;
      section.style.setProperty("--bg-section", newBg);
      // console.log(bgColor);
    });

    const time = document.querySelectorAll("time");
    time.forEach((time) => {
      const textColor = newColor === "#fff" ? "#4C4C4C" : "white";
      time.style.color = textColor;
    });

    const h1 = document.querySelectorAll("h1");
    h1.forEach((h1) => {
      const textColor = newColor === "#fff" ? "#4C4C4C" : "white";
      h1.style.color = textColor;
    });

    const a = document.querySelectorAll("a");
    a.forEach((a) => {
      const textColor = newColor === "#fff" ? "#4C4C4C" : "#BBBBBB";
      a.style.color = textColor;
    });

    const institutions = document.querySelectorAll("h3");
    institutions.forEach((element) => {
      const textColor = newColor === "#fff" ? "#4C4C4C" : "#BBBBBB";
      element.style.color = textColor;
    });

    const h2 = document.querySelectorAll("h2");
    h2.forEach((h2) => {
      const textColor = newColor === "#fff" ? "#4C4C4C" : "white";
      h2.style.color = textColor;
    });

    const p = document.querySelectorAll("p");
    p.forEach((p) => {
      const textColor = newColor === "#fff" ? "#4C4C4C" : "#A4A5A7";
      p.style.color = textColor;
    });

    const elements = document.querySelectorAll(".article"); // Selecciona todos los elementos con la clase "article"

    elements.forEach((element) => {
      // Asegúrate de que element es un HTMLElement
      if (element instanceof HTMLElement) {
        // Obtén el valor actual del borde
        const colorArticle = getComputedStyle(element)
          .getPropertyValue("--border-article")
          .trim();

        // Define el color del borde en función del color actual
        const borderColor =
          colorArticle === "1px solid #f2f2f2"
            ? "1px solid #333333" // Alternativa de color de borde oscuro
            : "1px solid #f2f2f2";

        console.log(borderColor); // Imprime el nuevo color de borde

        // Establece el nuevo color de borde
        element.style.setProperty("--border-article", borderColor);
      }
    });
    setDark(!dark);
  };

  return (
    <>
      {dark ? (
        <IoSunnyOutline color="white" className="icon" onClick={toggleColor} />
      ) : (
        <IoMoonOutline className="icon" onClick={toggleColor} />
      )}
    </>
  );
};

export default BackgroundColorChanger;
