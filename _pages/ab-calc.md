---
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

  <div class="results hidden">
    <div class="conversion-chart">
      <h3>Conversion rates</h3>
      <div class="chart-cols ">
        <div class="col-container col-a">
          <div class="col-label">
            A
          </div>
          <div class="rate-col ">
              <span class="rate-a"></span>
          </div>
          <span class="winner-text"><i class="fa fa-check"></i> Winner!</span>
        </div>
        <div class="col-container col-b">
          <div class="col-label">
            B
          </div>
          <div class="rate-col ">
            <span class="rate-b"></span>
          </div>
          <span class="winner-text"><i class="fa fa-check"></i> Winner!</span>
        </div>
      </div>
      <h3>Lift</h3>
      <div class="lift">

      </div>
    </div>
    <div class="significance">
      <h3>Significance of results</h3>
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
    <div class="copy-url">
      Copy the url below to share the results:
      <div>
        <input class="url-params" >
      </div>

    </div>
  </div>

</div>
<script src="/js/min/ab-calc.min.js"></script>