import React from "react";
import { connect } from "react-redux";

const Players = ({ players }) => (
  <section>
    <h2>Players</h2>
    <div className="players-container">
      {players.map((p) => (
        <article className="player">
          <img src={p.picture} alt={p.name} />
          <h3>{p.name}</h3>
          <div>
            <button>Starting</button>
            <button>Subtitute</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Players);
