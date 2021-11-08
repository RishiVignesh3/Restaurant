import Style from "./frontDesk.module.scss";
const frontDesk = () => {
  return (
    <div>
      <div className={Style["frontDesk"]}>
        <a className={Style["logo"]} />
        <header className={Style["frontdesk_Header"]}>
          <button className={Style["headerBtn"]}>Sign In</button>
          <button className={Style["headerBtn"]}>Sign Up</button>
        </header>
      </div>
      <section className={Style["content"]}>
        <h1>Starving? Book a Table to Feast..... </h1>
        <section className={Style["content_Searchers"]}>
          <input type="date" id="i1" placeholder="When" />
          <input type="time" id="12" placeholder="At?" />
          <input type="number" id="i3" placeholder="People" min="1" max="500" />
          <input type="submit" value="Search" />
        </section>
      </section>

      <footer>
        <ul>
          <li>Private Dining</li>
          <li>Reserve for Others</li>
          <li>Cuisines Near Me</li>
          <li>Restaurants Near Me</li>
          <li>Delivery Near Me</li>
          <li>Cuisines</li>
          <li>Restaurants Open Now</li>
        </ul>
        <ul>
          <li>Private Dining</li>
          <li>Reserve for Others</li>
          <li>Cuisines Near Me</li>
          <li>Restaurants Near Me</li>
          <li>Delivery Near Me</li>
          <li>Cuisines</li>
          <li>Restaurants Open Now</li>
        </ul>
      </footer>
    </div>
  );
};

export default frontDesk;
