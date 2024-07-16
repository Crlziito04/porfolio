const BackgroundColorChanger = () => {
  const toggleColor = () => {
    const root = document.documentElement;
    const currentColor = getComputedStyle(root)
      .getPropertyValue("--bg-color")
      .trim();
    const newColor = currentColor === "#fff" ? "#262629" : "#fff";
    root.style.setProperty("--bg-color", newColor);

    const section = document.querySelectorAll("section");
    section.forEach((section) => {
      const textColor = newColor === "#fff" ? "white" : "#4C4C4C";
      section.style.backgroundColor = textColor;
    });

    const p = document.querySelectorAll("p");
    p.forEach((p) => {
      const textColor = newColor === "#fff" ? "#4C4C4C" : "white";
      p.style.color = textColor;
    });
  };

  return <button onClick={toggleColor}>Cambiar Color de Fondo</button>;
};

export default BackgroundColorChanger;
