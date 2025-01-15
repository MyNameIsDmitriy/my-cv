<script lang="ts" setup>
import SheetHeader from '@/components/Sheet/SheetHeader.vue'
import SheetSkills from '@/components/Sheet/SheetSkills.vue'
import SheetProfile from './Sheet/SheetProfile.vue'
import SheetExperience from './Sheet/SheetExperience.vue'
import SheetEducation from './Sheet/SheetEducation.vue'
import SheetHobbies from './Sheet/SheetHobbies.vue'
</script>

<template>
  <div class="w-[650px] h-[877px] pt-10 pb-5 pl-16 pr-5 bg-white">
    <SheetHeader />
    <div class="w-full flex gap-16 mt-4">
      <div class="w-5/12 flex flex-col gap-8">
        <SheetSkills />
        <SheetProfile />
        <SheetEducation />
      </div>
      <div class="flex flex-col gap-8">
        <SheetExperience />
        <SheetHobbies />
      </div>
    </div>
  </div>
</template>
