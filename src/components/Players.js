import React from "react";
import { connect } from "react-redux";

const Players = ({ players, addStarting, addSubstitute }) => (
  <section>
    <h2>Players</h2>
    <div className="players-container">
      {players.map((p) => (
        <article className="player" key={p.id}>
          <img src={p.picture} alt={p.name} />
          <h3>{p.name}</h3>
          <div>
            <button onClick={() => addStarting(p)}>Starting</button>
            <button onClick={() => addSubstitute(p)}>Subtitute</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch) => ({
    addStarting(player){
      dispatch({
        type: "Add_Starting",
        player
      })
    },
    addSubstitute(player){
      dispatch({
        type: "Add_Substitute",
        player
      })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Players);
