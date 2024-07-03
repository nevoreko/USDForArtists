---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
    {
    avatar: '../images/teamMembers/AndreasKjærJensen.jpg',
    name: 'Andreas Kjær-Jensen',
    title: 'Lighting Lead',
    org: 'GhostVFX',
    orgLink: 'https://www.ghostvfx.com/',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/andreaskj/' },
    ]
  },
  {
    avatar: '../images/teamMembers/MarvinChrastek.jpg',
    name: 'Marvin Chrastek',
    title: 'Lighting Lead',
    org: 'GhostVFX',
    orgLink: 'https://www.ghostvfx.com/',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/marvinchrastek/' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      This wiki was created by two enthusiastic visual effects professionals who are excited to share their expertise with others.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
