<template>
  <div class="userProfile">
    <UserProfileInfos :msg="childData"/>
    <UpdateProfileForm @inputData="updateMessage"/>
    <DeleteProfile/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserProfileInfos from "@/components/UserProfileInfos";
import UpdateProfileForm from "@/components/UpdateProfileForm";
import DeleteProfile from "@/components/DeleteProfile";


export default {
  name: 'userProfile',
  components: {
    UserProfileInfos,
    UpdateProfileForm,
    DeleteProfile
  },
  data: function() {
    return {
      childData: ""
    };
  },
  methods: {
    updateMessage(variable) {
      this.childData = variable;
    }
  }
}
</script>

<style>
.register{
  width:100%;
}
</style>