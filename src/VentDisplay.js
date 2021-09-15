import './css/test.scss';

function VentDisplay({num}) {

  return (
    <div className={`col num${num}`}>
      <div className={`box_patient num${num}`}>
        <h2>[101] Patient ID: 12345678910 / Mode: V-ACV</h2>
        <div className="cate">
          <div className="col_box">
            <h3>Pressure</h3>
            <div className="graph_box"></div>
          </div>
          <div className="col_box">
            <div className="col_3">
              <h3 className="co_01">Ppeak</h3>
              <span className="co_02">42</span>
            </div>
            <div className="col_3">
              <h3 className="co_01">PEEP</h3>
              <span className="co_02">9</span>
            </div>
            <div className="col_3">
              <h3 className="co_01">Pmean</h3>
              <span className="co_02">25</span>
            </div>
          </div>
        </div>
        <div className="cate">
          <div className="col_box">
            <h3>Flow</h3>
            <div className="graph_box"></div>
          </div>
          <div className="col_box">
            <div className="col_3">
              <h3 className="co_03">Vti</h3>
              <span className="co_04">499</span>
            </div>
            <div className="col_3">
              <h3 className="co_03">Vte</h3>
              <span className="co_04">431</span>
            </div>
            <div className="col_3">
              <h3 className="co_03">Vmin</h3>
              <span className="co_04">7.0</span>
            </div>
          </div>
        </div>
        <div className="cate">
          <div className="col_box">
            <h3>Volume</h3>
            <div className="graph_box"></div>
          </div>
          <div className="col_box">
            <div className="col_3">
              <h3 className="co_05">RR</h3>
              <span className="co_06">19</span>
            </div>
            <div className="col_3">
              <h3 className="co_05">I:E</h3>
              <span className="co_06">1:2</span>
            </div>
            <div className="col_3">
              <h3 className="co_07">O2</h3>
              <span className="co_08">21</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VentDisplay;