import { ref } from 'vue';

const useCounter = (event) => {
  const number = ref(1);

  const add = () => {
    event();
    number.value++;
  }

  return {
    number,
    add
  }
}



export {
  useCounter,
}







