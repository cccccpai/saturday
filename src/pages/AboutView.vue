<script setup lang="ts"></script>

<template>
  <div>
    <div class="space">
      <div class="public">
        <div>公共空间</div>
        <div class="group">
          <div class="groupItem">分组1</div>
          <div class="groupItem">分组2</div>
          <div class="groupItem">分组3</div>
          <div class="groupItem">分组4</div>
        </div>
      </div>
      <!--  -->
      <div class="public">
        <div>私人空间</div>
        <div class="group">
          <div class="groupItem">分组1</div>
          <div class="groupItem">分组2</div>
          <div class="groupItem">分组3</div>
          <div class="groupItem">分组4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
.space {
  width: 200px;
  height: 800px;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
}
.public {
  margin-top: 50px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
}
.private {
  margin-top: 50px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
}
.group {
  margin: 20px;
}

.groupItem {
  margin: 20px;
}
</style>
