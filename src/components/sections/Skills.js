import React from 'react';
import config from '../../config/config';

const Skills = () => {
  const { 
    programmingLanguages, 
    compilerBundlers, 
    taskRunners, 
    frameworks, 
    databases,
    unitTesting,
    assertionLibrary,
    coverageTools,
    regularExpression,
    jsAdvancedLibrary,
    ottMediaPlayer,
    devOps,
    cicd,
    apiTesting,
    versionControl,
    bugTracking,
    operatingSystem,
    textEditor,
    dataVisualization,
    ftp,
    otherTools
  } = config.skills;

  const renderSkillItem = (skill) => (
    <div key={skill.name} className="row">
      <div className="col-md-12">
        <div className="progress-container progress-primary">
          <span className="progress-badge">
            <img 
              className={`skills-icon ${skill.name === 'Shell Script' ? 'no-padding' : ''}`}
              src={skill.icon} 
              alt={skill.name} 
              style={skill.style || {}} 
            />
            {skill.name !== 'Shell Script' && ` ${skill.name}`}
            {skill.hasBlog && (
              <>
                {' '}
                <a href={skill.blogLink} target="_blank" rel="noopener noreferrer" title={`Learning ${skill.name}`}>
                  <i className="fa fa-tags blog-badges"></i>
                </a>
              </>
            )}
          </span>
          <div className="progress">
            <div 
              className="progress-bar progress-bar-primary" 
              data-aos="progress-full" 
              data-aos-offset="10"
              data-aos-duration="2000" 
              role="progressbar" 
              aria-valuenow={skill.level} 
              aria-valuemin="0"
              aria-valuemax="100" 
              style={{ width: `${skill.level}%` }} 
              title={`${skill.level}%`}
            ></div>
            {skill.link ? (
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <span className="progress-value badge badge-success" title={`${skill.level}%`}>{skill.label}</span>
              </a>
            ) : (
              <span className="progress-value badge badge-success" title={`${skill.level}%`}>{skill.label}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="section" id="skill">
      <div className="container">
        <div className="h4 text-center mb-4 title">Professional Skills</div>
        
        {/* Row-01: Languages, Compiler/Bundler, Task Runner, Web Framework, Database */}
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Programming Language</h6>
                  </div>
                </div>
                {programmingLanguages.map(renderSkillItem)}
              </div>
            </div>
            
            <div className="col-lg-3 col-md-12">
              <div className="card-body cb-ignore-minHight">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Compiler, Module Bundler</h6>
                  </div>
                </div>
                {compilerBundlers.map(renderSkillItem)}
              </div>
              <div className="card-body cb-ignore-minHight">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Task Runner</h6>
                  </div>
                </div>
                {taskRunners.map(renderSkillItem)}
              </div>
            </div>
            
            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Web Framework</h6>
                  </div>
                </div>
                {frameworks.map(renderSkillItem)}
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Database</h6>
                  </div>
                </div>
                {databases.map(renderSkillItem)}
              </div>
            </div>
          </div>
        </div>

        {/* Row-02: Unit Testing, Assertion, Coverage, RegEx, JS Advanced Library, OTT Player */}
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Unit Testing Framework</h6>
                  </div>
                </div>
                {unitTesting.map(renderSkillItem)}
              </div>
            </div>
            
            <div className="col-lg-3 col-md-12">
              <div className="card-body cb-ignore-minHight">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Assertion Library</h6>
                  </div>
                </div>
                {assertionLibrary.map(renderSkillItem)}
              </div>
              <div className="card-body cb-ignore-minHight">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Coverage Tools</h6>
                  </div>
                </div>
                {coverageTools.map(renderSkillItem)}
              </div>
            </div>
            
            <div className="col-lg-3 col-md-12">
              <div className="card-body cb-ignore-minHight">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Regular Expression</h6>
                  </div>
                </div>
                {regularExpression.map(renderSkillItem)}
              </div>
              <div className="card-body cb-ignore-minHight">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">JavaScript Advance Library</h6>
                  </div>
                </div>
                {jsAdvancedLibrary.map(renderSkillItem)}
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">OTT Media Player</h6>
                  </div>
                </div>
                {ottMediaPlayer.map(renderSkillItem)}
              </div>
            </div>
          </div>
        </div>

        {/* Row-03: DevOps, CI/CD, API Testing, Version Control, Bug Tracking */}
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="card-body cb-ignore-minHight">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">DevOps</h6>
                  </div>
                </div>
                {devOps.map(renderSkillItem)}
              </div>
              <div className="card-body cb-ignore-minHight">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">CI/CD Tools</h6>
                  </div>
                </div>
                {cicd.map(renderSkillItem)}
              </div>
            </div>
            
            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">API Testing</h6>
                  </div>
                </div>
                {apiTesting.map(renderSkillItem)}
              </div>
            </div>
            
            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Version Control System</h6>
                  </div>
                </div>
                {versionControl.map(renderSkillItem)}
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Bug/Task Tracking Tools</h6>
                  </div>
                </div>
                {bugTracking.map(renderSkillItem)}
              </div>
            </div>
          </div>
        </div>

        {/* Row-04: Operating System, Text Editor, Data Visualization, FTP, Other Tools */}
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Operating System</h6>
                  </div>
                </div>
                {operatingSystem.map(renderSkillItem)}
              </div>
            </div>
            
            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Text Editor</h6>
                  </div>
                </div>
                {textEditor.map(renderSkillItem)}
              </div>
            </div>
            
            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Data Visualization Platform</h6>
                  </div>
                </div>
                {dataVisualization.map(renderSkillItem)}
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">FTP</h6>
                  </div>
                </div>
                {ftp.map(renderSkillItem)}
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h6 className="ignoreTransform">Other Software & Tools</h6>
                  </div>
                </div>
                {otherTools.map(renderSkillItem)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
