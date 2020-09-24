import React from "react";
import {connect} from "react-redux";

const Starting = ({ starting, removeStarting }) => (
  <section>
    <h2>Starting Players</h2>
    <div className="fieldStart">
      {starting.map(s => (
        <article className="starting" key={s.id}>
          <div>
            <img src={s.picture} alt={s.name}></img>
            <button onClick={() => removeStarting(s)}>X</button>
          </div>
          <p>{s.name}</p>
        </article>
      ))}
    </div>
  </section>
);
const mapStateToProps = (state) => ({
    starting: state.starting
  });
  
  const mapDispatchToProps = (dispatch) => ({
    removeStarting(player){
      dispatch({
        type: "remove_Starting",
        player
      })
    }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Starting);
