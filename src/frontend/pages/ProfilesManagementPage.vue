<template>
  <div class="profiles-management-page--container">
    <CenterLayout>
      <ContentText>
        <div>
          Vous pouvez utiliser jusqu'à cinq (5) appareils en même temps
          avec votre compte. Pour utiliser un tunnel vpn avec un appareil:
        </div>
        <ol>
          <li>Créer un profile</li>
          <li>
            <div>
              Téléchargez OpenVPN Connect pour Android ou iOS
            </div>
            <a
              target="__blank"
              href="https://play.google.com/store/apps/details?id=net.openvpn.openvpn&hl=en&gl=US"
            >
              <img
                class="image-link"
                :src="GooglePlay"
                alt="Google Play"
              >
            </a>
            <a
              target="__blank"
              href="https://apps.apple.com/us/app/openvpn-connect/id590379981"
            >
              <img
                class="image-link"
                :src="AppleStore"
                alt="Apple Store"
              >
            </a>
          </li>
          <li>Téléchargez le fichier .ovpn associé au profile</li>
          <li>
            Importez le profile dans OpenVPN Connect et initiez la connexion
          </li>
          <li>Profitez ! ✨</li>
        </ol>
      </ContentText>
      <hr>
      <div class="list">
        <div class="list-heading">
          <ContentHeading>
            Liste de vos profiles
          </ContentHeading>
        </div>
      </div>
      <ProfilesTable />
    </CenterLayout>
  </div>
</template>

<script lang="ts" setup>
import CenterLayout from '@/components/layouts/CenterLayout.vue';
import ContentText from '@/components/typography/ContentText.vue';
import GooglePlay from '@/assets/svg/google-play.svg';
import AppleStore from '@/assets/svg/apple-store.svg';
import ContentHeading from '@/components/typography/ContentHeading.vue';
import ProfilesTable from '@/components/display/ProfilesTable.vue';
</script>

<style lang="scss" scoped>
.profiles-management-page--container {
    background-color: #0A0A18;
    padding-top: 19.2vh;
    min-height: 100vh;
}
ol li {
    margin-bottom: 1em;
}
.image-link {
    width: 12.4vw;
    height: auto;
    margin-top: 1em;
    margin-left: 1.5em;
}
hr {
    border: none;
    height: 1px;
    background-color: #fff;
}
.list {
    padding-top: 1em;

    &-heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
    }
}
</style>
