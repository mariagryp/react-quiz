//type som define how props look for the Game
type WelcomeProps = {
  nextScreen: () => void;
};



const Welcome = (props: WelcomeProps) => {
  return (
    <section>
      <h1>Welcome till denna quiz!</h1>
      <p>Vill du sätta igång?</p>
      <button onClick={props.nextScreen}>Starta</button>
    </section>
  );
};

export default Welcome;
