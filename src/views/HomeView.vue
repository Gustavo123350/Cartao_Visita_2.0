<template>
  <div class="business-card">
    <h1>{{ name }}</h1>
    <br/>
    <h1><p>{{ description }}</p></h1>
    <br/>
    <h1><p>
      {{ currentDateTime }}</p></h1>
    <br/>
   <div class="contact-links">
   <h1> <a :href = "'https://api.whatsapp.com/send?phone='+ whatsappNumber" class="whts"><i class="bi bi-whatsapp"></i>whatsapp</a></h1>
    <br/>
   <h1> <a :href="'https://www.instagram.com/' + instagramUsername" class="ist"><i class="bi bi-instagram"></i>instagram</a></h1>
    <br/>
  <h1> <a :href="'https://www.facebook.com/'+ facebookUsername"><i class="bi bi-facebook"></i>facebook</a></h1>
    <br/>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Gustavo Maques Fava',
      description: 'Desenvolvendor Full Stack',
      whatsappNumber:'558589134009',
      facebookUsername:'/favadesenvolvimento/',
      instagramUsername:'/fava_desenvolvilmento/',
      currentDateTime:''
    };
  },
  mounted(){
    this.getCurrentDateTime();
    setInterval(this.getCurrentDateTime, 1000);
  },
  methods: {
    getCurrentDateTime() {
      const currteDate = new Date();
      const  options  = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
      this.currentDateTime = currteDate.toLocaleDateString('pt-br', options);
    }
  },
}
</script>
