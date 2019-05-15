import React from 'react';
import amica from '../../assets/amica.png';
import daveskillerbread from '../../assets/daveskillerbread.png';
import pge from '../../assets/pge.jpg';


function Sponsors() {
return (
    <div className="main-container">
      <style jsx>{`
        .main-container{
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          position: relative;
        }
        .container {
          position: relative;
          width: 30%;
        }

        .header {
          color: #e15f26;
          font-size: 29px;
          font-weight:700;
          font-family: open sans;
          letter-spacing: 3px;
          line-height: 37.7px;
          text-align: center;
          margin-block-start: 50px;
          vertical-align: baseline;

        }
        .amica{
          width:250px;
          height:193px;
          padding:25px;
          padding-left: 50px;
          display: block;
        }
        .daveskillerbread {
          padding: 25px;
          display: inline;
          position: relative;
          text-align: center;
          width: 150px;
        }

        .pge {
          padding: 25px;
          width:265px;
          height:74px;
        }

        .overlayHover {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: .5s ease;
          background-color: #008CBA;
          cursor: pointer;
        }

        .container:hover .overlayHover {
          opacity: 1;
        }

        .text {
            color: white;
            font-size: 20px;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            text-align: center;
          }
            `}</style>
        <h3 className="header">PROUDLY SPONSORED BY</h3>
        <div className="container">
          <a href="https://www.amica.com/" ><img className="amica"src={amica} alt='Amica Company Logo'/></a>
            <div class="overlayHover">
              <div class="text">test</div>
            </div>
          </div>

          <div className="container">
              <img className="daveskillerbread" src={daveskillerbread} alt='Daves Killer Bread Company Logo'/>
              <div class="overlayHover">
                <div class="text"><a href="http://www.daveskillerbread.com">test</a></div>
              </div>
            </div>

            <div className="container">
              <img className="pge" src={pge}
               alt='PGE Company Logo'/>
              </div>
      </div>
  );
}

export default Sponsors;
