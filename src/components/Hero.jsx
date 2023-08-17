import SearchFieldHero from "./Search-Fields/SearchFieldHero";
import SearchTags from "./Search-Tags/SearchTags";

function Hero() {
  return (
    <>
      <section className="hero container">
        <h1 className="heading-primary">
          Start searching your favourite recipes
        </h1>

        <SearchFieldHero />

        <h3 className="heading-secondary">
          or select between the available search queries
        </h3>
        <SearchTags />
      </section>
    </>
  );
}

export default Hero;
