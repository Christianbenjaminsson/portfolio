<template>
  <div class="cv-content">
    <a href="./assets/test.docx" download>Download link</a>
    <div class="education">
      <h2>Education</h2>
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

    <div class="work">
      <h2>Work</h2>
      <table class="resume">
        <tr>
          <td><strong>mars 2021</strong></td>
          <td><img class="img_logo" src="@/assets/inext_logo.png" alt="" /></td>
          <td><strong>iNext AB</strong></td>
        </tr>
        <tr>
          <td><strong>till maj 2021</strong></td>
          <td></td>
          <td>
            Pratikplats där jag arbetar med att utveckla mjukvara med hjälp av
            ramverken Angular och Vue
          </td>
        </tr>

        <tr>
          <td><strong>september 2020</strong></td>
          <td><img class="img_logo" src="@/assets/vgrit_logo.png" alt="" /></td>
          <td><strong>VGR IT</strong></td>
        </tr>
        <tr>
          <td><strong>till december 2020</strong></td>
          <td></td>
          <td>
            Praktikplats där jag arbetade i ett agilt projekt med uppgift att
            uppdatera regionens integrationer.
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.cv-content {
  padding: 100px;
  display: block;
}

h2 {
  text-align: left;
}

th,
td {
  border: 1px solid black;
}

table {
  width: 100%;
}

.img_logo {
  height: 50px;
  width: 100px;
}
</style>
