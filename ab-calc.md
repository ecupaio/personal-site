---
layout: index
permalink: /ab-test-calculator/
---
<div id="ab-calc">
  <h1>A/B Test Calculator</h1>
  <form id="calc-form">

    <div class="data-row">
      <div class="form-field">
        <label>Sessions A</label>
        <input class="sessions-a" type="number" value="1000" />
      </div>
      <div class="form-field">
        <label>Conversions A</label>
        <input class="conversions-a" type="number" value="25"/>
      </div>
    </div>
    <div class="data-row">
      <div class="form-field">
        <label>Sessions B</label>
        <input class="sessions-b" type="number" value="1100"/>
      </div>
      <div class="form-field">
        <label>Conversions B</label>
        <input class="conversions-b" type="number" value="50"/>
      </div>
    </div>
    <input type="submit" class="pure-btn"/>
  </form>

  <div class="results">
    <div class="conversion-chart">
      <h3>Conversion rates</h3>
      <div class="chart-cols">
        <div class="col-container">
          <div class="col-label">
            A
          </div>
          <div class="rate-col col-a">
              <span class="rate-a"></span>
          </div>
        </div>
        <div class="col-container">
          <div class="col-label">
            B
          </div>
          <div class="rate-col col-b">
            <span class="rate-b"></span>
          </div>
        </div>

      </div>

    </div>
    <div class="significance">
      <div class="is-sig hidden">
        The results were significant at <span class="confidence"></span> confidence.
      </div>
      <div class="not-sig hidden">
        The results were not significant.
      </div>
    </div>
    <div class="sig-chart hidden">
      <svg class="donut" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
        <circle class="donut-ring" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
        <circle class="donut-segment" stroke-width="2" stroke-dasharray="0,100" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
      </svg>
      <span class="confidence"></span>
    </div>
  </div>
  <div class="url-maker"></div>

</div>
