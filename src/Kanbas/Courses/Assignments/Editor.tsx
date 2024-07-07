export default function AssignmentEditor() {
  return (
      <div id="wd-assignments-editor">
          <label htmlFor="wd-name">Assignment Name</label>
          <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
          <textarea id="wd-description">
The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
          </textarea>
          <br />
          <table>
              <tbody>
              <tr>
                  <td align="right" valign="top">
                      <label htmlFor="wd-points">Points</label>
                  </td>
                  <td>
                      <input id="wd-points" type="number" value={100} />
                  </td>
              </tr>
              <tr>
                  <td align="right" valign="top">
                      <label htmlFor="wd-assignment-group">Assignment Group</label>
                  </td>
                  <td>
                      <select id="wd-assignment-group">
                          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                          {/* Add other options as needed */}
                      </select>
                  </td>
              </tr>
              <tr>
                  <td align="right" valign="top">
                      <label htmlFor="wd-display-grade">Display Grade as</label>
                  </td>
                  <td>
                      <select id="wd-display-grade">
                          <option value="Percentage">Percentage</option>
                          {/* Add other options as needed */}
                      </select>
                  </td>
              </tr>
              <tr>
                  <td align="right" valign="top">
                      <label htmlFor="wd-submission-type">Submission Type</label>
                  </td>
                  <td>
                      <select id="wd-submission-type">
                          <option value="Online">Online</option>
                          {/* Add other options as needed */}
                      </select>
                      <br />
                      <label>
                          <input type="checkbox" /> Text Entry
                      </label>
                      <br />
                      <label>
                          <input type="checkbox" /> Website URL
                      </label>
                      <br />
                      <label>
                          <input type="checkbox" /> Media Recordings
                      </label>
                      <br />
                      <label>
                          <input type="checkbox" /> Student Annotation
                      </label>
                      <br />
                      <label>
                          <input type="checkbox" /> File Uploads
                      </label>
                  </td>
              </tr>
              <tr>
                  <td align="right" valign="top">
                      <label htmlFor="wd-assign-to">Assign to</label>
                  </td>
                  <td>
                      <input id="wd-assign-to" value="Everyone" />
                  </td>
              </tr>
              <tr>
                  <td align="right" valign="top">
                      <label htmlFor="wd-due">Due</label>
                  </td>
                  <td>
                      <input id="wd-due" type="date" value="2024-05-13" />
                  </td>
              </tr>
              <tr>
                  <td align="right" valign="top">
                      <label htmlFor="wd-available-from">Available from</label>
                  </td>
                  <td>
                      <input id="wd-available-from" type="date" value="2024-05-06" />
                  </td>
              </tr>
              <tr>
                  <td align="right" valign="top">
                      <label htmlFor="wd-available-until">Until</label>
                  </td>
                  <td>
                      <input id="wd-available-until" type="date" value="2024-05-20" />
                  </td>
              </tr>
              </tbody>
          </table>
          <button>Cancel</button>
          <button>Save</button>
      </div>
  );
}

