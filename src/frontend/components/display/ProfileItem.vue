<template>
  <tr>
    <td>
      <span class="round" />
      Actif
    </td>
    <td>{{ props.name }}</td>
    <td>client-{{ props.file }}-profile.ovpn</td>
    <td>{{ props.date }}</td>
    <td>
      <button @click="emit('download')">
        <svg
          width="25"
          height="25"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="39"
            height="39"
            rx="8"
            fill="#3644C9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.046 24.3867C18.2991 24.6364 18.6422 24.7766 19 24.7766C19.3578 24.7766 19.7009 24.6364 19.954 24.3867L26.704 17.72C26.9425 17.4672 27.0723 17.1329 27.0661 16.7875C27.0599 16.4421 26.9183 16.1125 26.6709 15.8682C26.4236 15.6239 26.0899 15.484 25.7401 15.4779C25.3904 15.4718 25.0519 15.6 24.796 15.8356L20.35 20.2267V8.33333C20.35 7.97971 20.2078 7.64057 19.9546 7.39052C19.7014 7.14048 19.358 7 19 7C18.642 7 18.2986 7.14048 18.0454 7.39052C17.7922 7.64057 17.65 7.97971 17.65 8.33333V20.2267L13.204 15.8356C12.9481 15.6 12.6096 15.4718 12.2599 15.4779C11.9101 15.484 11.5764 15.6239 11.3291 15.8682C11.0817 16.1125 10.9401 16.4421 10.9339 16.7875C10.9277 17.1329 11.0575 17.4672 11.296 17.72L18.046 24.3867ZM11.35 28.3333C10.992 28.3333 10.6486 28.4738 10.3954 28.7239C10.1422 28.9739 10 29.313 10 29.6667C10 30.0203 10.1422 30.3594 10.3954 30.6095C10.6486 30.8595 10.992 31 11.35 31H26.65C27.008 31 27.3514 30.8595 27.6046 30.6095C27.8578 30.3594 28 30.0203 28 29.6667C28 29.313 27.8578 28.9739 27.6046 28.7239C27.3514 28.4738 27.008 28.3333 26.65 28.3333H11.35Z"
            fill="white"
          />
        </svg>
      </button>
      <button @click="emit('delete')">
        <svg
          width="25"
          height="25"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.3125 32.8125C39.3125 36.3875 36.3875 39.3125 32.8125 39.3125H6.8125C3.2375 39.3125 0.3125 36.3875 0.3125 32.8125V6.8125C0.3125 3.2375 3.2375 0.3125 6.8125 0.3125H32.8125C36.3875 0.3125 39.3125 3.2375 39.3125 6.8125V32.8125Z"
            fill="#BF1837"
          />
          <path
            d="M31.5125 12.7925L26.8325 8.11255L19.8125 15.1325L12.7925 8.11255L8.1125 12.7925L15.1325 19.8125L8.1125 26.8326L12.7925 31.5126L19.8125 24.4925L26.8325 31.5126L31.5125 26.8326L24.4925 19.8125L31.5125 12.7925Z"
            fill="white"
          />
        </svg>
      </button>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import {defineProps, defineEmits} from 'vue';
const emit = defineEmits(['delete', 'download']);
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  file: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
tr {
    color: #000;
    background-color: #fff;
    margin-bottom: 5px;
}
tr td:first-child,
tr td:last-child {
    border: 1px solid #fff;
}
tr td:first-child {
    border-radius: 4px 0px 0px 4px;
}
tr td:last-child {
    border-radius: 0px 4px 4px 0px;
}
td {
    padding: 15px 0px;
}
span.round {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #15CF74;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 6px;
}
button {
    background: none;
    border: none;
    cursor: pointer;
}
</style>
