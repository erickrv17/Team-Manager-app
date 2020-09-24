import React from "react";
import {connect} from "react-redux";

const Substitute = ({ substitute, removeSubstitute }) => (
  <section>
    <h2>Substitute Players</h2>
    <div className="fieldSub">
      {substitute.map(s => (
        <article className="substitute" key={s.id}>
          <div>
            <img src={s.picture} alt={s.name}></img>
            <button onClick={() => removeSubstitute(s)}>X</button>
          </div>
          <p>{s.name}</p>
        </article>
      ))}
    </div>
  </section>
);
const mapStateToProps = (state) => ({
    substitute: state.substitute
  });
  
  const mapDispatchToProps = (dispatch) => ({
    removeSubstitute(player){
      dispatch({
        type: "remove_Substitute",
        player
      })
    }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Substitute);
