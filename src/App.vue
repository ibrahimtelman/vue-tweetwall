<template>
  <div id="app">
    <div class="container">
      <div class="controlBar">
        <input type="text" class="controlBar__searchInput" placeholder="Search">
        <button class="controlBar__action">&#9658;</button>
      </div>

    </div>
  </div>
</template>

<style>
  body {
    text-align: center;
    height: 100%;
    margin: 0;
    background: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%) no-repeat fixed;
  }

  .container{
    padding: 50px;
  }

  .controlBar{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .controlBar__searchInput{
    width: 85%;
    padding: 10px;
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #999;
  }

  .controlBar__action{
    padding: 0;
    border: none;
    background: #fc4482;
    width: 45px;
    height: 45px;
    color: #fff;
    border-radius: 50%;
    box-shadow: 0px 1px 1px #00000033;
    outline: none;
    cursor: pointer;
  }

</style>
