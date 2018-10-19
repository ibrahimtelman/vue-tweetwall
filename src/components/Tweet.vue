<template>
    <div class="tweet">
        <div class="tweet__avatarContainer">
            <img :src="tweet.user.profile_image_url"
                 class="tweet__avatarContainer__avatar" width="70" height="70">
        </div>
        <div class="tweet__body">
            <div class="tweet__body__info">
                    <span class="tweet__body__info__author">
                        <b class="tweet__body__info__name">{{ tweet.user.name }}</b>
                        <small class="tweet__body__info__link">@{{ tweet.user.screen_name }}</small>
                    </span>
            </div>
            <div class="tweet__body__content">
                {{ tweet.extended_tweet ? tweet.extended_tweet.full_text : tweet.text }}
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Tweet',
  props: ['tweet'],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
    .tweet{
        background: #fff;
        margin: 20px 0;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        border-radius: 4px;
        box-shadow: 0 1px 1px #00000033;
        font-family: sans-serif;

        &__avatarContainer {
            margin-right: 20px;
            float: left;

            &__avatar {
                margin-top: 3px;
                border-radius: 50%;
            }
        }

        &__body{
            text-align: left;

            &__info{
                margin-bottom: 5px;

                &__name{
                    color: #333;
                    margin-right: 10px;
                }
            }
        }
    }
</style>
