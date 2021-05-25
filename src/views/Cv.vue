<template>
  <div class="cv-content">
    <a href="assets/another.pdf" download>Download</a>
    <div class="education">
      <h1>Education</h1>
      <div class="education-table">
        <table>
          <tr>
            <td>2019-pågående</td>
            <td>Systemdeveloper Java</td>
            <td>Newton Kompetensutveckling</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>Programmering 1</td>
            <td>Infokomp</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="Work">
      <h1>Work</h1>
      <div class="work-table">
        <div class="work-description">
          <table>
            <th>Datum</th>
            <th>Företag</th>
            <tr>
              <td>2021-03 - 2021-05</td>
              <td>Inext</td>
            </tr>
            <th colspan="2">Arbetsuppgifter</th>
            <tr>
              <td colspan="2">
                Pratikplats där jag arbetar med att utveckla mjukvara med hjälp
                av ramverken Angular och Vue
              </td>
            </tr>
          </table>
        </div>

        <div class="work-description">
          <table>
            <th>Datum</th>
            <th>Företag</th>
            <tr>
              <td>2020-09 - 2020-12</td>
              <td>VGR IT</td>
            </tr>
            <th colspan="2">Arbetsuppgifter</th>
            <tr>
              <td colspan="2">
                Praktikplats där jag arbetade i ett agilt projekt med uppgift
                att uppdatera regionens integrationer.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.cv-content {
  display: block;
  margin-top: 100px;
}

table,
th,
td {
  border: 1px solid black;
}

.education {
  display: block;
  justify-content: center;
}

.work {
  display: block;
  margin: auto;
}
</style>
