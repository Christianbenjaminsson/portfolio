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
        <table>
          <tr>
            <td>2021-03 - 2021-05</td>
            <td>Inext</td>
          </tr>
          <tr>
            <td>
              Pratikplats där jag arbetar med att utveckla mjukvara med hjälp av
              ramverken Angular och Vue
            </td>
          </tr>
          <tr>
            <td>2020-09 - 2020-12</td>
            <td>VGR IT</td>
          </tr>
          <tr>
            <td>
              Praktikplats där jag arbetade i ett agilt projekt med uppgift att
              uppdatera regionens integrationer.
            </td>
          </tr>
        </table>
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

.education-table {
  display: flex;
  justify-content: center;
}

.work-table {
  display: flex;
  justify-content: center;
}
</style>
