import React from 'react';

import Social from '../Social';
import Rain from '../Rain';

import imgProfile from '../../assets/profile.jpg';
import './styles.css';

export default function Main() {
  const abreChave = '{';
  const fechaChave = '}';
  const igual = '=';

  return (
    <>
      <Rain />
      <div className="container-main">
        <div className="content-profile">
          <div className="content-main">
            <div className="content-img">
              <img src={imgProfile} alt="Avatar" />
            </div>
            <div className="info">
              <div className="balls">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="cores">
                <span className="function">function </span>
                <span className="const">myResume</span>
                <span className="pontuation">(){abreChave}</span>
                <div className="ident1">
                  <p className="cores">
                    <span className="function">const </span>
                    <span className="const">
                      name <span className="function">{igual} </span>
                      <span className="value">
                        'Emmanuel Messias da Silva Costa'
                      </span>
                      <span className="pontuation">;</span>
                    </span>
                  </p>
                  <p className="cores">
                    <span className="function">const </span>
                    <span className="const">
                      contact <span className="function">{igual} </span>
                      <span className="value">
                        'emmanuel_costasilva@hotmail.com'
                      </span>
                      <span className="pontuation">;</span>
                    </span>
                  </p>
                  <p className="cores">
                    <span className="function">const </span>
                    <span className="const">
                      phone <span className="function">{igual} </span>
                      <span className="value">'+55 84 98898-8668'</span>
                      <span className="pontuation">;</span>
                    </span>
                  </p>
                  <br />
                  {/* inicio do obj1 */}
                  <p className="cores">
                    <span className="function">let </span>
                    <span className="const">
                      education <span className="function">{igual} </span>
                      <span className="pontuation">[</span>
                      <br />
                      {/* pos0 do obj */}
                      <div className="ident1">
                        <span className="pontuation">{abreChave}</span>
                        <br />
                        <div className="ident1">
                          <span className="key">course</span>
                          <span className="pontuation">: </span>
                          <span className="value">
                            'Bachelor of Information Systems'
                          </span>
                          <span className="pontuation">,</span>
                        </div>
                        <div className="ident1">
                          <span className="key">instituition</span>
                          <span className="pontuation">: </span>
                          <span className="value">
                            'Federal Rural University of Semiarid (UFERSA)'
                          </span>
                          <span className="pontuation">,</span>
                        </div>
                        <span className="pontuation">{fechaChave}</span>
                      </div>
                      {/* pos1 do obj */}
                      {/*  <div className="ident1">
                        <span className="pontuation">{abreChave}</span>
                        <br />
                        <div className="ident1">
                          <span className="key">course</span>
                          <span className="pontuation">: </span>
                          <span className="value">
                            'Técnico de nível médio em Meio Ambiente'
                        </span>
                          <span className="pontuation">,</span>
                        </div>
                        <div className="ident1">
                          <span className="key">instituition</span>
                          <span className="pontuation">: </span>
                          <span className="value">
                            'Instituto Federal de Educação, Ciência e Tecnologia
                            do Rio Grande do Norte (IFRN)'
                        </span>
                          <span className="pontuation">,</span>
                        </div>
                        <span className="pontuation">{fechaChave}</span>
                      </div> */}
                      <span className="pontuation">];</span>
                    </span>
                  </p>
                  {/* final do obj1 */}
                  <br />
                  {/* inicio do obj2 */}
                  <p className="cores">
                    <span className="function">let </span>
                    <span className="const">
                      skills <span className="function">{igual} </span>
                      <span className="pontuation">[</span>
                      <br />
                      {/* pos0 do obj */}
                      <div className="ident1">
                        <span className="pontuation">{abreChave}</span>
                        <br />
                        <div className="ident1">
                          {/* indice 1 */}
                          <span className="key">JavaScript</span>
                          <span className="pontuation">: </span>
                          <span className="value">'2-3 years'</span>
                          <span className="pontuation">,</span>
                          <br />
                          {/* indice 2 */}
                          <span className="key">HTML5</span>
                          <span className="pontuation">: </span>
                          <span className="value">'2-3 years'</span>
                          <span className="pontuation">,</span>
                          <br />
                          {/* indice 3 */}
                          <span className="key">CSS3</span>
                          <span className="pontuation">: </span>
                          <span className="value">'2-3 years'</span>
                          <span className="pontuation">,</span>
                          <br />
                          {/* indice 4 */}
                          <span className="key">React</span>
                          <span className="pontuation">: </span>
                          <span className="value">'1-2 years'</span>
                          <span className="pontuation">,</span>
                          <br />
                          {/* indice 5 */}
                          <span className="key">Styled_Components</span>
                          <span className="pontuation">: </span>
                          <span className="value">'0-1 years'</span>
                          <span className="pontuation">,</span>
                          <br />
                          {/* indice 5 */}
                          <span className="key">SASS</span>
                          <span className="pontuation">: </span>
                          <span className="value">'0-1 years'</span>
                          <span className="pontuation">,</span>
                          <br />

                          {/* indice 6 */}
                          <span className="key">React_Native</span>
                          <span className="pontuation">: </span>
                          <span className="value">'0-1 years'</span>
                          <span className="pontuation">,</span>
                          <br />
                          {/* indice 7 */}
                          {/*                           <span className="key">MySQL</span>
                          <span className="pontuation">: </span>
                          <span className="value">'Básico-Intermediário'</span>
                          <span className="pontuation">,</span>
                          <br /> */}
                          {/* indice 8 */}
                          <span className="key">Photoshop</span>
                          <span className="pontuation">: </span>
                          <span className="value">'5-6'</span>
                          <span className="pontuation">,</span>
                          <br />
                          {/* indice 9 */}
                          <span className="key">Figma</span>
                          <span className="pontuation">: </span>
                          <span className="value">'1-2'</span>
                          <span className="pontuation"></span>
                          <br />
                          {/* indice 8 */}
                          <span className="key">English</span>
                          <span className="pontuation">: </span>
                          <span className="value">
                            'Basic technical English'
                          </span>
                          <span className="pontuation">,</span>
                          <br />
                        </div>
                        <span className="pontuation">{fechaChave}</span>
                      </div>
                      {/* pos1 do obj */}
                      <span className="pontuation">];</span>
                    </span>
                  </p>
                  {/* final do obj2 */}
                  <br />
                  {/* inicio do obj3 */}
                  <p className="cores">
                    <span className="function">let </span>
                    <span className="const">
                      experiences <span className="function">{igual} </span>
                      <span className="pontuation">[</span>
                      <br />
                      {/* pos0 do obj */}
                      <div className="ident1">
                        <span className="pontuation">{abreChave}</span>
                        <br />
                        <div className="ident1">
                          <span className="key">company</span>
                          <span className="pontuation">: </span>
                          <span className="value">'Acelerabit'</span>
                          <span className="pontuation">,</span>
                        </div>
                        <div className="ident1">
                          <span className="key">post</span>
                          <span className="pontuation">: </span>
                          <span className="value">'Front-End Developer'</span>
                          <span className="pontuation">,</span>
                        </div>
                        <div className="ident1">
                          <span className="key">period</span>
                          <span className="pontuation">: </span>
                          <span className="value">'Ago/2020 - currently'</span>
                          <span className="pontuation">,</span>
                        </div>
                        <span className="pontuation">{fechaChave},</span>
                      </div>
                      {/* pos1 do obj */}
                      <div className="ident1">
                        <span className="pontuation">{abreChave}</span>
                        <br />
                        <div className="ident1">
                          <span className="key">company</span>
                          <span className="pontuation">: </span>
                          <span className="value">
                            'Turing Tecnologia - Junior Company (UFERSA)'
                          </span>
                          <span className="pontuation">,</span>
                        </div>
                        <div className="ident1">
                          <span className="key">post</span>
                          <span className="pontuation">: </span>
                          <span className="value">
                            'Front-End Developer and Designer'
                          </span>
                          <span className="pontuation">,</span>
                        </div>
                        <div className="ident1">
                          <span className="key">period</span>
                          <span className="pontuation">: </span>
                          <span className="value">
                            'Nov/2019 - currently as a volunteer'
                          </span>
                          <span className="pontuation">,</span>
                        </div>
                        <span className="pontuation">{fechaChave},</span>
                      </div>
                      <span className="pontuation">];</span>
                    </span>
                  </p>
                  {/* final do obj3 */}
                </div>
                {/* fim da função principal */}
                <span className="pontuation">{fechaChave}</span>
                <br />
                <br />
                {/* add console.log e chamar a função */}
                {/*  <p className="cores">
                <span className="const">myResume</span>
                <span className="pontuation">();</span>
              </p>
              <br /> */}
                <p className="cores">
                  <span className="comment">
                    /* let's have a coffee and chat? */
                  </span>
                  <div className="cursorAnimated">
                    <span className="cursor">|</span>
                  </div>
                </p>
              </p>
            </div>
            {/* social */}
            <Social />
          </div>
        </div>
      </div>
    </>
  );
}
