<template>
  <footer>
    <div class="footer">
      <ul class="footerLinks">
        <li>Conditions générales</li>
        <li>Contact</li>
        <li>A propos</li>
        <li>Services</li>
        <li>Aide</li>
        <li>Confidentialité</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
.footer{
  border-top: lightgrey 1px solid;
  padding: 10px 40px 15px 0px;
  color: rgb(163, 163, 163);
  font-size: 0.9em;
}
.footerLinks{
  display: flex;
  justify-content: space-evenly;
}
li{
  list-style-type: none;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
}
</style>