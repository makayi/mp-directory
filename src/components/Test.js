import React, { Component } from 'react';
import data from '../mpData';

class Test extends Component {
  render() {
    return (
      <div>
        {data.member.map((member, i) => {
          return (
            <div key={i}>
              <div className="senator-details">
                <div className="senator-name">
                  <div>{member.name}</div>
                  <div className="senator-state">{member.constituency}</div>
                </div>
                <div className="senator-contact">
                  {member.name !== '' ? (
                    <a
                      title="send email"
                      href={`mailto:${
                        member.name
                      }?subject=Anti Social Media Bill &body=${member.name}`}
                      className="icon-link"
                    >
                      <i className="fas fa-envelope" />
                    </a>
                  ) : (
                    ''
                  )}

                  {member.name !== '' ? (
                    <>
                      <a
                        title="call"
                        href={`tel:${member.name}`}
                        className="icon-link"
                      >
                        <i className="fas fa-phone" />
                      </a>

                      <a
                        title="send sms"
                        href={`sms:${member.name}`}
                        className="icon-link"
                      >
                        <i className="fas fa-sms" />
                      </a>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              );
            </div>
          );
        })}
      </div>
    );
  }
}
export default Test;
