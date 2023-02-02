import React from 'react'
import { Container } from '@mui/material'

import { ServiceItemComponent, ServiceItemTypes } from './components'
import { ServiceStyles } from './Service.styles'

import mock from '../../assets/images/project.png'

import demolicaoSustentavel0 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-0.jpg'
import demolicaoSustentavel1 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-1.jpg'
import demolicaoSustentavel2 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-2.jpg'
import demolicaoSustentavel3 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-3.jpg'
import demolicaoSustentavel4 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-4.jpg'
import demolicaoSustentavel5 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-5.jpg'
import demolicaoSustentavel6 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-6.jpg'
import demolicaoSustentavel7 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-7.jpg'
import demolicaoSustentavel8 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-8.jpg'
import demolicaoSustentavel9 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-9.jpg'
import demolicaoSustentavel10 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-10.jpg'
import demolicaoSustentavel11 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-11.jpg'
import demolicaoSustentavel12 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-12.jpg'
import demolicaoSustentavel13 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-13.jpg'
import demolicaoSustentavel14 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-14.jpg'
import demolicaoSustentavel15 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-15.jpg'
import demolicaoSustentavel16 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-16.jpg'
import demolicaoSustentavel17 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-17.jpg'
import demolicaoSustentavel18 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-18.jpg'
import demolicaoSustentavel19 from '../../assets/images/services/demolicao-sustentavel/demolicao-sustentavel-19.jpg'
// 👆 acabou

import aluguelCacamba0 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-0.jpg'
import aluguelCacamba1 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-1.jpg'
import aluguelCacamba2 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-2.jpg'
import aluguelCacamba3 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-3.jpg'
import aluguelCacamba4 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-4.jpg'
import aluguelCacamba5 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-5.jpg'
import aluguelCacamba6 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-6.jpg'
import aluguelCacamba7 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-7.jpg'
import aluguelCacamba8 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-8.jpg'
import aluguelCacamba9 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-9.jpg'
import aluguelCacamba10 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-10.jpg'
import aluguelCacamba11 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-11.jpg'
import aluguelCacamba12 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-12.jpg'
import aluguelCacamba13 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-13.jpg'
import aluguelCacamba14 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-14.jpg'
import aluguelCacamba15 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-15.jpg'
import aluguelCacamba16 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-16.jpg'
import aluguelCacamba17 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-17.jpg'
import aluguelCacamba18 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-18.jpg'
import aluguelCacamba19 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-19.jpg'
import aluguelCacamba20 from '../../assets/images/services/aluguel-cacamba/aluguel-cacamba-20.jpg'
// 👆 acabou

import demolicaoMecanizada0 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-0.jpg'
import demolicaoMecanizada1 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-1.jpg'
import demolicaoMecanizada2 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-2.jpg'
import demolicaoMecanizada3 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-3.jpg'
import demolicaoMecanizada4 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-4.jpg'
import demolicaoMecanizada5 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-5.jpg'
import demolicaoMecanizada6 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-6.jpg'
import demolicaoMecanizada7 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-7.jpg'
import demolicaoMecanizada8 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-8.jpg'
import demolicaoMecanizada9 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-9.jpg'
import demolicaoMecanizada10 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-10.jpg'
import demolicaoMecanizada11 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-11.jpg'
import demolicaoMecanizada12 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-12.jpg'
import demolicaoMecanizada13 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-13.jpg'
import demolicaoMecanizada14 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-14.jpg'
import demolicaoMecanizada15 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-15.jpg'
import demolicaoMecanizada16 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-16.jpg'
import demolicaoMecanizada17 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-17.jpg'
import demolicaoMecanizada18 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-18.jpg'
import demolicaoMecanizada19 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-19.jpg'
import demolicaoMecanizada20 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-20.jpg'
import demolicaoMecanizada21 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-21.jpg'
import demolicaoMecanizada22 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-22.jpg'
import demolicaoMecanizada23 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-23.jpg'
import demolicaoMecanizada24 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-24.jpg'
import demolicaoMecanizada25 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-25.jpg'
import demolicaoMecanizada26 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-26.jpg'
import demolicaoMecanizada27 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-27.jpg'
import demolicaoMecanizada28 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-28.jpg'
import demolicaoMecanizada29 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-29.jpg'
import demolicaoMecanizada30 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-30.jpg'
import demolicaoMecanizada31 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-31.jpg'
import demolicaoMecanizada32 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-32.jpg'
import demolicaoMecanizada33 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-33.jpg'
import demolicaoMecanizada34 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-34.jpg'
import demolicaoMecanizada35 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-35.jpg'
import demolicaoMecanizada36 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-36.jpg'
import demolicaoMecanizada37 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-37.jpg'
import demolicaoMecanizada38 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-38.jpg'
import demolicaoMecanizada39 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-39.jpg'
import demolicaoMecanizada40 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-40.jpg'
import demolicaoMecanizada41 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-41.jpg'
import demolicaoMecanizada42 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-42.jpg'
import demolicaoMecanizada43 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-43.jpg'
import demolicaoMecanizada44 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-44.jpg'
import demolicaoMecanizada45 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-45.jpg'
import demolicaoMecanizada46 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-46.jpg'
import demolicaoMecanizada47 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-47.jpg'
import demolicaoMecanizada48 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-48.jpg'
import demolicaoMecanizada49 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-49.jpg'
import demolicaoMecanizada50 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-50.jpg'
import demolicaoMecanizada51 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-51.jpg'
import demolicaoMecanizada52 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-52.jpg'
import demolicaoMecanizada53 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-53.jpg'
import demolicaoMecanizada54 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-54.jpg'
import demolicaoMecanizada55 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-55.jpg'
import demolicaoMecanizada56 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-56.jpg'
import demolicaoMecanizada57 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-57.jpg'
import demolicaoMecanizada58 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-58.jpg'
import demolicaoMecanizada59 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-59.jpg'
import demolicaoMecanizada60 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-60.jpg'
import demolicaoMecanizada61 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-61.jpg'
import demolicaoMecanizada62 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-62.jpg'
import demolicaoMecanizada63 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-63.jpg'
import demolicaoMecanizada64 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-64.jpg'
import demolicaoMecanizada65 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-65.jpg'
import demolicaoMecanizada66 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-66.jpg'
import demolicaoMecanizada67 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-67.jpg'
import demolicaoMecanizada68 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-68.jpg'
import demolicaoMecanizada69 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-69.jpg'
import demolicaoMecanizada70 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-70.jpg'
import demolicaoMecanizada71 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-71.jpg'
import demolicaoMecanizada72 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-72.jpg'
import demolicaoMecanizada73 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-73.jpg'
import demolicaoMecanizada74 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-74.jpg'
import demolicaoMecanizada75 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-75.jpg'
import demolicaoMecanizada76 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-76.jpg'
import demolicaoMecanizada77 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-77.jpg'
import demolicaoMecanizada78 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-78.jpg'
import demolicaoMecanizada79 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-79.jpg'
import demolicaoMecanizada80 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-80.jpg'
import demolicaoMecanizada81 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-81.jpg'
import demolicaoMecanizada82 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-82.jpg'
import demolicaoMecanizada83 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-83.jpg'
import demolicaoMecanizada84 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-84.jpg'
import demolicaoMecanizada85 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-85.jpg'
import demolicaoMecanizada86 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-86.jpg'
import demolicaoMecanizada87 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-87.jpg'
import demolicaoMecanizada88 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-88.jpg'
import demolicaoMecanizada89 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-89.jpg'
import demolicaoMecanizada90 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-90.jpg'
import demolicaoMecanizada91 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-91.jpg'
import demolicaoMecanizada92 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-92.jpg'
import demolicaoMecanizada93 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-93.jpg'
import demolicaoMecanizada94 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-94.jpg'
import demolicaoMecanizada95 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-95.jpg'
import demolicaoMecanizada96 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-96.jpg'
import demolicaoMecanizada97 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-97.jpg'
import demolicaoMecanizada98 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-98.jpg'
import demolicaoMecanizada99 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-99.jpg'
import demolicaoMecanizada100 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-100.jpg'
import demolicaoMecanizada101 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-101.jpg'
import demolicaoMecanizada102 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-102.jpg'
import demolicaoMecanizada103 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-103.jpg'
import demolicaoMecanizada104 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-104.jpg'
import demolicaoMecanizada105 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-105.jpg'
import demolicaoMecanizada106 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-106.jpg'
import demolicaoMecanizada107 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-107.jpg'
import demolicaoMecanizada108 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-108.jpg'
import demolicaoMecanizada109 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-109.jpg'
import demolicaoMecanizada110 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-110.jpg'
import demolicaoMecanizada111 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-111.jpg'
import demolicaoMecanizada112 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-112.jpg'
import demolicaoMecanizada113 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-113.jpg'
import demolicaoMecanizada114 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-114.jpg'
import demolicaoMecanizada115 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-115.jpg'
import demolicaoMecanizada116 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-116.jpg'
import demolicaoMecanizada117 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-117.jpg'
import demolicaoMecanizada118 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-118.jpg'
import demolicaoMecanizada119 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-119.jpg'
import demolicaoMecanizada120 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-120.jpg'
import demolicaoMecanizada121 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-121.jpg'
import demolicaoMecanizada122 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-122.jpg'
import demolicaoMecanizada123 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-123.jpg'
import demolicaoMecanizada124 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-124.jpg'
import demolicaoMecanizada125 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-125.jpg'
import demolicaoMecanizada126 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-126.jpg'
import demolicaoMecanizada127 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-127.jpg'
import demolicaoMecanizada128 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-128.jpg'
import demolicaoMecanizada129 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-129.jpg'
import demolicaoMecanizada130 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-130.jpg'
import demolicaoMecanizada131 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-131.jpg'
import demolicaoMecanizada132 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-132.jpg'
import demolicaoMecanizada133 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-133.jpg'
import demolicaoMecanizada134 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-134.jpg'
import demolicaoMecanizada135 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-135.jpg'
import demolicaoMecanizada136 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-136.jpg'
import demolicaoMecanizada137 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-137.jpg'
import demolicaoMecanizada138 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-138.jpg'
import demolicaoMecanizada139 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-139.jpg'
import demolicaoMecanizada140 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-140.jpg'
import demolicaoMecanizada141 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-141.jpg'
import demolicaoMecanizada142 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-142.jpg'
import demolicaoMecanizada143 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-143.jpg'
import demolicaoMecanizada144 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-144.jpg'
import demolicaoMecanizada145 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-145.jpg'
import demolicaoMecanizada146 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-146.jpg'
import demolicaoMecanizada147 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-147.jpg'
import demolicaoMecanizada148 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-148.jpg'
import demolicaoMecanizada149 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-149.jpg'
import demolicaoMecanizada150 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-150.jpg'
import demolicaoMecanizada151 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-151.jpg'
import demolicaoMecanizada152 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-152.jpg'
import demolicaoMecanizada153 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-153.jpg'
import demolicaoMecanizada154 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-154.jpg'
import demolicaoMecanizada155 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-155.jpg'
import demolicaoMecanizada156 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-156.jpg'
import demolicaoMecanizada157 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-157.jpg'
import demolicaoMecanizada158 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-158.jpg'
import demolicaoMecanizada159 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-159.jpg'
import demolicaoMecanizada160 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-160.jpg'
import demolicaoMecanizada161 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-161.jpg'
import demolicaoMecanizada162 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-162.jpg'
import demolicaoMecanizada163 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-163.jpg'
import demolicaoMecanizada164 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-164.jpg'
import demolicaoMecanizada165 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-165.jpg'
import demolicaoMecanizada166 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-166.jpg'
import demolicaoMecanizada167 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-167.jpg'
import demolicaoMecanizada168 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-168.jpg'
import demolicaoMecanizada169 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-169.jpg'
import demolicaoMecanizada170 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-170.jpg'
import demolicaoMecanizada171 from '../../assets/images/services/demolicao-mecanizada/demolicao-mecanizada-171.jpg'
// 👆 acabou

import demolicaoAltoRisco0 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-0.jpg'
import demolicaoAltoRisco1 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-1.jpg'
import demolicaoAltoRisco2 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-2.jpg'
import demolicaoAltoRisco3 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-3.jpg'
import demolicaoAltoRisco4 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-4.jpg'
import demolicaoAltoRisco5 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-5.jpg'
import demolicaoAltoRisco6 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-6.jpg'
import demolicaoAltoRisco7 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-7.jpg'
import demolicaoAltoRisco8 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-8.jpg'
import demolicaoAltoRisco9 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-9.jpg'
import demolicaoAltoRisco10 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-10.jpg'
import demolicaoAltoRisco11 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-11.jpg'
import demolicaoAltoRisco12 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-12.jpg'
import demolicaoAltoRisco13 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-13.jpg'
import demolicaoAltoRisco14 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-14.jpg'
import demolicaoAltoRisco15 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-15.jpg'
import demolicaoAltoRisco16 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-16.jpg'
import demolicaoAltoRisco17 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-17.jpg'
import demolicaoAltoRisco18 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-18.jpg'
import demolicaoAltoRisco19 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-19.jpg'
import demolicaoAltoRisco20 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-20.jpg'
import demolicaoAltoRisco21 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-21.jpg'
import demolicaoAltoRisco22 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-22.jpg'
import demolicaoAltoRisco23 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-23.jpg'
import demolicaoAltoRisco24 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-24.jpg'
import demolicaoAltoRisco25 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-25.jpg'
import demolicaoAltoRisco26 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-26.jpg'
import demolicaoAltoRisco27 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-27.jpg'
import demolicaoAltoRisco28 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-28.jpg'
import demolicaoAltoRisco29 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-29.jpg'
import demolicaoAltoRisco30 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-30.jpg'
import demolicaoAltoRisco31 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-31.jpg'
import demolicaoAltoRisco32 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-32.jpg'
import demolicaoAltoRisco33 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-33.jpg'
import demolicaoAltoRisco34 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-34.jpg'
import demolicaoAltoRisco35 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-35.jpg'
import demolicaoAltoRisco36 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-36.jpg'
import demolicaoAltoRisco37 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-37.jpg'
import demolicaoAltoRisco38 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-38.jpg'
import demolicaoAltoRisco39 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-39.jpg'
import demolicaoAltoRisco40 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-40.jpg'
import demolicaoAltoRisco41 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-41.jpg'
import demolicaoAltoRisco42 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-42.jpg'
import demolicaoAltoRisco43 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-43.jpg'
import demolicaoAltoRisco44 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-44.jpg'
import demolicaoAltoRisco45 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-45.jpg'
import demolicaoAltoRisco46 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-46.jpg'
import demolicaoAltoRisco47 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-47.jpg'
import demolicaoAltoRisco48 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-48.jpg'
import demolicaoAltoRisco49 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-49.jpg'
import demolicaoAltoRisco50 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-50.jpg'
import demolicaoAltoRisco51 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-51.jpg'
import demolicaoAltoRisco52 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-52.jpg'
import demolicaoAltoRisco53 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-53.jpg'
import demolicaoAltoRisco54 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-54.jpg'
import demolicaoAltoRisco55 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-55.jpg'
import demolicaoAltoRisco56 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-56.jpg'
import demolicaoAltoRisco57 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-57.jpg'
import demolicaoAltoRisco58 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-58.jpg'
import demolicaoAltoRisco59 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-59.jpg'
import demolicaoAltoRisco60 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-60.jpg'
import demolicaoAltoRisco61 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-61.jpg'
import demolicaoAltoRisco62 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-62.jpg'
import demolicaoAltoRisco63 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-63.jpg'
import demolicaoAltoRisco64 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-64.jpg'
import demolicaoAltoRisco65 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-65.jpg'
import demolicaoAltoRisco66 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-66.jpg'
import demolicaoAltoRisco67 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-67.jpg'
import demolicaoAltoRisco68 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-68.jpg'
import demolicaoAltoRisco69 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-69.jpg'
import demolicaoAltoRisco70 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-70.jpg'
import demolicaoAltoRisco71 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-71.jpg'
import demolicaoAltoRisco72 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-72.jpg'
import demolicaoAltoRisco73 from '../../assets/images/services/demolicao-alto-risco/demolicao-alto-risco-73.jpg'
// 👆 acabou

import desmontagemDesativacaoIndustrial0 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-0.jpg'
import desmontagemDesativacaoIndustrial1 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-1.jpg'
import desmontagemDesativacaoIndustrial2 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-2.jpg'
import desmontagemDesativacaoIndustrial3 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-3.jpg'
import desmontagemDesativacaoIndustrial4 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-4.jpg'
import desmontagemDesativacaoIndustrial5 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-5.jpg'
import desmontagemDesativacaoIndustrial6 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-6.jpg'
import desmontagemDesativacaoIndustrial7 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-7.jpg'
import desmontagemDesativacaoIndustrial8 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-8.jpg'
import desmontagemDesativacaoIndustrial9 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-9.jpg'
import desmontagemDesativacaoIndustrial10 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-10.jpg'
import desmontagemDesativacaoIndustrial11 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-11.jpg'
import desmontagemDesativacaoIndustrial12 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-12.jpg'
import desmontagemDesativacaoIndustrial13 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-13.jpg'
import desmontagemDesativacaoIndustrial14 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-14.jpg'
import desmontagemDesativacaoIndustrial15 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-15.jpg'
import desmontagemDesativacaoIndustrial16 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-16.jpg'
import desmontagemDesativacaoIndustrial17 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-17.jpg'
import desmontagemDesativacaoIndustrial18 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-18.jpg'
import desmontagemDesativacaoIndustrial19 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-19.jpg'
import desmontagemDesativacaoIndustrial20 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-20.jpg'
import desmontagemDesativacaoIndustrial21 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-21.jpg'
import desmontagemDesativacaoIndustrial22 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-22.jpg'
import desmontagemDesativacaoIndustrial23 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-23.jpg'
import desmontagemDesativacaoIndustrial24 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-24.jpg'
import desmontagemDesativacaoIndustrial25 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-25.jpg'
import desmontagemDesativacaoIndustrial26 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-26.jpg'
import desmontagemDesativacaoIndustrial27 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-27.jpg'
import desmontagemDesativacaoIndustrial28 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-28.jpg'
import desmontagemDesativacaoIndustrial29 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-29.jpg'
import desmontagemDesativacaoIndustrial30 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-30.jpg'
import desmontagemDesativacaoIndustrial31 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-31.jpg'
import desmontagemDesativacaoIndustrial32 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-32.jpg'
import desmontagemDesativacaoIndustrial33 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-33.jpg'
import desmontagemDesativacaoIndustrial34 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-34.jpg'
import desmontagemDesativacaoIndustrial35 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-35.jpg'
import desmontagemDesativacaoIndustrial36 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-36.jpg'
import desmontagemDesativacaoIndustrial37 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-37.jpg'
import desmontagemDesativacaoIndustrial38 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-38.jpg'
import desmontagemDesativacaoIndustrial39 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-39.jpg'
import desmontagemDesativacaoIndustrial40 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-40.jpg'
import desmontagemDesativacaoIndustrial41 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-41.jpg'
import desmontagemDesativacaoIndustrial42 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-42.jpg'
import desmontagemDesativacaoIndustrial43 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-43.jpg'
import desmontagemDesativacaoIndustrial44 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-44.jpg'
import desmontagemDesativacaoIndustrial45 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-45.jpg'
import desmontagemDesativacaoIndustrial46 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-46.jpg'
import desmontagemDesativacaoIndustrial47 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-47.jpg'
import desmontagemDesativacaoIndustrial48 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-48.jpg'
import desmontagemDesativacaoIndustrial49 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-49.jpg'
import desmontagemDesativacaoIndustrial50 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-50.jpg'
import desmontagemDesativacaoIndustrial51 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-51.jpg'
import desmontagemDesativacaoIndustrial52 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-52.jpg'
import desmontagemDesativacaoIndustrial53 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-53.jpg'
import desmontagemDesativacaoIndustrial54 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-54.jpg'
import desmontagemDesativacaoIndustrial55 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-55.jpg'
import desmontagemDesativacaoIndustrial56 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-56.jpg'
import desmontagemDesativacaoIndustrial57 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-57.jpg'
import desmontagemDesativacaoIndustrial58 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-58.jpg'
import desmontagemDesativacaoIndustrial59 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-59.jpg'
import desmontagemDesativacaoIndustrial60 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-60.jpg'
import desmontagemDesativacaoIndustrial61 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-61.jpg'
import desmontagemDesativacaoIndustrial62 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-62.jpg'
import desmontagemDesativacaoIndustrial63 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-63.jpg'
import desmontagemDesativacaoIndustrial64 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-64.jpg'
import desmontagemDesativacaoIndustrial65 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-65.jpg'
import desmontagemDesativacaoIndustrial66 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-66.jpg'
import desmontagemDesativacaoIndustrial67 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-67.jpg'
import desmontagemDesativacaoIndustrial68 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-68.jpg'
import desmontagemDesativacaoIndustrial69 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-69.jpg'
import desmontagemDesativacaoIndustrial70 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-70.jpg'
import desmontagemDesativacaoIndustrial71 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-71.jpg'
import desmontagemDesativacaoIndustrial72 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-72.jpg'
import desmontagemDesativacaoIndustrial73 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-73.jpg'
import desmontagemDesativacaoIndustrial74 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-74.jpg'
import desmontagemDesativacaoIndustrial75 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-75.jpg'
import desmontagemDesativacaoIndustrial76 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-76.jpg'
import desmontagemDesativacaoIndustrial77 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-77.jpg'
import desmontagemDesativacaoIndustrial78 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-78.jpg'
import desmontagemDesativacaoIndustrial79 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-79.jpg'
import desmontagemDesativacaoIndustrial80 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-80.jpg'
import desmontagemDesativacaoIndustrial81 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-81.jpg'
import desmontagemDesativacaoIndustrial82 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-82.jpg'
import desmontagemDesativacaoIndustrial83 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-83.jpg'
import desmontagemDesativacaoIndustrial84 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-84.jpg'
import desmontagemDesativacaoIndustrial85 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-85.jpg'
import desmontagemDesativacaoIndustrial86 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-86.jpg'
import desmontagemDesativacaoIndustrial87 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-87.jpg'
import desmontagemDesativacaoIndustrial88 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-88.jpg'
import desmontagemDesativacaoIndustrial89 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-89.jpg'
import desmontagemDesativacaoIndustrial90 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-90.jpg'
import desmontagemDesativacaoIndustrial91 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-91.jpg'
import desmontagemDesativacaoIndustrial92 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-92.jpg'
import desmontagemDesativacaoIndustrial93 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-93.jpg'
import desmontagemDesativacaoIndustrial94 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-94.jpg'
import desmontagemDesativacaoIndustrial95 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-95.jpg'
import desmontagemDesativacaoIndustrial96 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-96.jpg'
import desmontagemDesativacaoIndustrial97 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-97.jpg'
import desmontagemDesativacaoIndustrial98 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-98.jpg'
import desmontagemDesativacaoIndustrial99 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-99.jpg'
import desmontagemDesativacaoIndustrial100 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-100.jpg'
import desmontagemDesativacaoIndustrial101 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-101.jpg'
import desmontagemDesativacaoIndustrial102 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-102.jpg'
import desmontagemDesativacaoIndustrial103 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-103.jpg'
import desmontagemDesativacaoIndustrial104 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-104.jpg'
import desmontagemDesativacaoIndustrial105 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-105.jpg'
import desmontagemDesativacaoIndustrial106 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-106.jpg'
import desmontagemDesativacaoIndustrial107 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-107.jpg'
import desmontagemDesativacaoIndustrial108 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-108.jpg'
import desmontagemDesativacaoIndustrial109 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-109.jpg'
import desmontagemDesativacaoIndustrial110 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-110.jpg'
import desmontagemDesativacaoIndustrial111 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-111.jpg'
import desmontagemDesativacaoIndustrial112 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-112.jpg'
import desmontagemDesativacaoIndustrial113 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-113.jpg'
import desmontagemDesativacaoIndustrial114 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-114.jpg'
import desmontagemDesativacaoIndustrial115 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-115.jpg'
import desmontagemDesativacaoIndustrial116 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-116.jpg'
import desmontagemDesativacaoIndustrial117 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-117.jpg'
import desmontagemDesativacaoIndustrial118 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-118.jpg'
import desmontagemDesativacaoIndustrial119 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-119.jpg'
import desmontagemDesativacaoIndustrial120 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-120.jpg'
import desmontagemDesativacaoIndustrial121 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-121.jpg'
import desmontagemDesativacaoIndustrial122 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-122.jpg'
import desmontagemDesativacaoIndustrial123 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-123.jpg'
import desmontagemDesativacaoIndustrial124 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-124.jpg'
import desmontagemDesativacaoIndustrial125 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-125.jpg'
import desmontagemDesativacaoIndustrial126 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-126.jpg'
import desmontagemDesativacaoIndustrial127 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-127.jpg'
import desmontagemDesativacaoIndustrial128 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-128.jpg'
import desmontagemDesativacaoIndustrial129 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-129.jpg'
import desmontagemDesativacaoIndustrial130 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-130.jpg'
import desmontagemDesativacaoIndustrial131 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-131.jpg'
import desmontagemDesativacaoIndustrial132 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-132.jpg'
import desmontagemDesativacaoIndustrial133 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-133.jpg'
import desmontagemDesativacaoIndustrial134 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-134.jpg'
import desmontagemDesativacaoIndustrial135 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-135.jpg'
import desmontagemDesativacaoIndustrial136 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-136.jpg'
import desmontagemDesativacaoIndustrial137 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-137.jpg'
import desmontagemDesativacaoIndustrial138 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-138.jpg'
import desmontagemDesativacaoIndustrial139 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-139.jpg'
import desmontagemDesativacaoIndustrial140 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-140.jpg'
import desmontagemDesativacaoIndustrial141 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-141.jpg'
import desmontagemDesativacaoIndustrial142 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-142.jpg'
import desmontagemDesativacaoIndustrial143 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-143.jpg'
import desmontagemDesativacaoIndustrial144 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-144.jpg'
import desmontagemDesativacaoIndustrial145 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-145.jpg'
import desmontagemDesativacaoIndustrial146 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-146.jpg'
import desmontagemDesativacaoIndustrial147 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-147.jpg'
import desmontagemDesativacaoIndustrial148 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-148.jpg'
import desmontagemDesativacaoIndustrial149 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-149.jpg'
import desmontagemDesativacaoIndustrial150 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-150.jpg'
import desmontagemDesativacaoIndustrial151 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-151.jpg'
import desmontagemDesativacaoIndustrial152 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-152.jpg'
import desmontagemDesativacaoIndustrial153 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-153.jpg'
import desmontagemDesativacaoIndustrial154 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-154.jpg'
import desmontagemDesativacaoIndustrial155 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-155.jpg'
import desmontagemDesativacaoIndustrial156 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-156.jpg'
import desmontagemDesativacaoIndustrial157 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-157.jpg'
import desmontagemDesativacaoIndustrial158 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-158.jpg'
import desmontagemDesativacaoIndustrial159 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-159.jpg'
import desmontagemDesativacaoIndustrial160 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-160.jpg'
import desmontagemDesativacaoIndustrial161 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-161.jpg'
import desmontagemDesativacaoIndustrial162 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-162.jpg'
import desmontagemDesativacaoIndustrial163 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-163.jpg'
import desmontagemDesativacaoIndustrial164 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-164.jpg'
import desmontagemDesativacaoIndustrial165 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-165.jpg'
import desmontagemDesativacaoIndustrial166 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-166.jpg'
import desmontagemDesativacaoIndustrial167 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-167.jpg'
import desmontagemDesativacaoIndustrial168 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-168.jpg'
import desmontagemDesativacaoIndustrial169 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-169.jpg'
import desmontagemDesativacaoIndustrial170 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-170.jpg'
import desmontagemDesativacaoIndustrial171 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-171.jpg'
import desmontagemDesativacaoIndustrial172 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-172.jpg'
import desmontagemDesativacaoIndustrial173 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-173.jpg'
import desmontagemDesativacaoIndustrial174 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-174.jpg'
import desmontagemDesativacaoIndustrial175 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-175.jpg'
import desmontagemDesativacaoIndustrial176 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-176.jpg'
import desmontagemDesativacaoIndustrial177 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-177.jpg'
import desmontagemDesativacaoIndustrial178 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-178.jpg'
import desmontagemDesativacaoIndustrial179 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-179.jpg'
import desmontagemDesativacaoIndustrial180 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-180.jpg'
import desmontagemDesativacaoIndustrial181 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-181.jpg'
import desmontagemDesativacaoIndustrial182 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-182.jpg'
import desmontagemDesativacaoIndustrial183 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-183.jpg'
import desmontagemDesativacaoIndustrial184 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-184.jpg'
import desmontagemDesativacaoIndustrial185 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-185.jpg'
import desmontagemDesativacaoIndustrial186 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-186.jpg'
import desmontagemDesativacaoIndustrial187 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-187.jpg'
import desmontagemDesativacaoIndustrial188 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-188.jpg'
import desmontagemDesativacaoIndustrial189 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-189.jpg'
import desmontagemDesativacaoIndustrial190 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-190.jpg'
import desmontagemDesativacaoIndustrial191 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-191.jpg'
import desmontagemDesativacaoIndustrial192 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-192.jpg'
import desmontagemDesativacaoIndustrial193 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-193.jpg'
import desmontagemDesativacaoIndustrial194 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-194.jpg'
import desmontagemDesativacaoIndustrial195 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-195.jpg'
import desmontagemDesativacaoIndustrial196 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-196.jpg'
import desmontagemDesativacaoIndustrial197 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-197.jpg'
import desmontagemDesativacaoIndustrial198 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-198.jpg'
import desmontagemDesativacaoIndustrial199 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-199.jpg'
import desmontagemDesativacaoIndustrial200 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-200.jpg'
import desmontagemDesativacaoIndustrial201 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-201.jpg'
import desmontagemDesativacaoIndustrial202 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-202.jpg'
import desmontagemDesativacaoIndustrial203 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-203.jpg'
import desmontagemDesativacaoIndustrial204 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-204.jpg'
import desmontagemDesativacaoIndustrial205 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-205.jpg'
import desmontagemDesativacaoIndustrial206 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-206.jpg'
import desmontagemDesativacaoIndustrial207 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-207.jpg'
import desmontagemDesativacaoIndustrial208 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-208.jpg'
import desmontagemDesativacaoIndustrial209 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-209.jpg'
import desmontagemDesativacaoIndustrial210 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-210.jpg'
import desmontagemDesativacaoIndustrial211 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-211.jpg'
import desmontagemDesativacaoIndustrial212 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-212.jpg'
import desmontagemDesativacaoIndustrial213 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-213.jpg'
import desmontagemDesativacaoIndustrial214 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-214.jpg'
import desmontagemDesativacaoIndustrial215 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-215.jpg'
import desmontagemDesativacaoIndustrial216 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-216.jpg'
import desmontagemDesativacaoIndustrial217 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-217.jpg'
import desmontagemDesativacaoIndustrial218 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-218.jpg'
import desmontagemDesativacaoIndustrial219 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-219.jpg'
import desmontagemDesativacaoIndustrial220 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-220.jpg'
import desmontagemDesativacaoIndustrial221 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-221.jpg'
import desmontagemDesativacaoIndustrial222 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-222.jpg'
import desmontagemDesativacaoIndustrial223 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-223.jpg'
import desmontagemDesativacaoIndustrial224 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-224.jpg'
import desmontagemDesativacaoIndustrial225 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-225.jpg'
import desmontagemDesativacaoIndustrial226 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-226.jpg'
import desmontagemDesativacaoIndustrial227 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-227.jpg'
import desmontagemDesativacaoIndustrial228 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-228.jpg'
import desmontagemDesativacaoIndustrial229 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-229.jpg'
import desmontagemDesativacaoIndustrial230 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-230.jpg'
import desmontagemDesativacaoIndustrial231 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-231.jpg'
import desmontagemDesativacaoIndustrial232 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-232.jpg'
import desmontagemDesativacaoIndustrial233 from '../../assets/images/services/desmontagem-desativacao-industrial/desmontagem-desativacao-industrial-233.jpg'
// 👆 acabou

import demolicaoManual0 from '../../assets/images/services/demolicao-manual/demolicao-manual-0.jpg'
import demolicaoManual1 from '../../assets/images/services/demolicao-manual/demolicao-manual-1.jpg'
import demolicaoManual2 from '../../assets/images/services/demolicao-manual/demolicao-manual-2.jpg'
import demolicaoManual3 from '../../assets/images/services/demolicao-manual/demolicao-manual-3.jpg'
import demolicaoManual4 from '../../assets/images/services/demolicao-manual/demolicao-manual-4.jpg'
import demolicaoManual5 from '../../assets/images/services/demolicao-manual/demolicao-manual-5.jpg'
import demolicaoManual6 from '../../assets/images/services/demolicao-manual/demolicao-manual-6.jpg'
import demolicaoManual7 from '../../assets/images/services/demolicao-manual/demolicao-manual-7.jpg'
import demolicaoManual8 from '../../assets/images/services/demolicao-manual/demolicao-manual-8.jpg'
import demolicaoManual9 from '../../assets/images/services/demolicao-manual/demolicao-manual-9.jpg'
import demolicaoManual10 from '../../assets/images/services/demolicao-manual/demolicao-manual-10.jpg'
import demolicaoManual11 from '../../assets/images/services/demolicao-manual/demolicao-manual-11.jpg'
import demolicaoManual12 from '../../assets/images/services/demolicao-manual/demolicao-manual-12.jpg'
import demolicaoManual13 from '../../assets/images/services/demolicao-manual/demolicao-manual-13.jpg'
import demolicaoManual14 from '../../assets/images/services/demolicao-manual/demolicao-manual-14.jpg'
import demolicaoManual15 from '../../assets/images/services/demolicao-manual/demolicao-manual-15.jpg'
import demolicaoManual16 from '../../assets/images/services/demolicao-manual/demolicao-manual-16.jpg'
import demolicaoManual17 from '../../assets/images/services/demolicao-manual/demolicao-manual-17.jpg'
import demolicaoManual18 from '../../assets/images/services/demolicao-manual/demolicao-manual-18.jpg'
import demolicaoManual19 from '../../assets/images/services/demolicao-manual/demolicao-manual-19.jpg'
import demolicaoManual20 from '../../assets/images/services/demolicao-manual/demolicao-manual-20.jpg'
import demolicaoManual21 from '../../assets/images/services/demolicao-manual/demolicao-manual-21.jpg'
import demolicaoManual22 from '../../assets/images/services/demolicao-manual/demolicao-manual-22.jpg'
import demolicaoManual23 from '../../assets/images/services/demolicao-manual/demolicao-manual-23.jpg'
import demolicaoManual24 from '../../assets/images/services/demolicao-manual/demolicao-manual-24.jpg'
import demolicaoManual25 from '../../assets/images/services/demolicao-manual/demolicao-manual-25.jpg'
import demolicaoManual26 from '../../assets/images/services/demolicao-manual/demolicao-manual-26.jpg'
import demolicaoManual27 from '../../assets/images/services/demolicao-manual/demolicao-manual-27.jpg'
import demolicaoManual28 from '../../assets/images/services/demolicao-manual/demolicao-manual-28.jpg'
import demolicaoManual29 from '../../assets/images/services/demolicao-manual/demolicao-manual-29.jpg'
import demolicaoManual30 from '../../assets/images/services/demolicao-manual/demolicao-manual-30.jpg'
import demolicaoManual31 from '../../assets/images/services/demolicao-manual/demolicao-manual-31.jpg'
import demolicaoManual32 from '../../assets/images/services/demolicao-manual/demolicao-manual-32.jpg'
import demolicaoManual33 from '../../assets/images/services/demolicao-manual/demolicao-manual-33.jpg'
import demolicaoManual34 from '../../assets/images/services/demolicao-manual/demolicao-manual-34.jpg'
import demolicaoManual35 from '../../assets/images/services/demolicao-manual/demolicao-manual-35.jpg'
import demolicaoManual36 from '../../assets/images/services/demolicao-manual/demolicao-manual-36.jpg'
import demolicaoManual37 from '../../assets/images/services/demolicao-manual/demolicao-manual-37.jpg'
import demolicaoManual38 from '../../assets/images/services/demolicao-manual/demolicao-manual-38.jpg'
import demolicaoManual39 from '../../assets/images/services/demolicao-manual/demolicao-manual-39.jpg'
import demolicaoManual40 from '../../assets/images/services/demolicao-manual/demolicao-manual-40.jpg'
import demolicaoManual41 from '../../assets/images/services/demolicao-manual/demolicao-manual-41.jpg'
import demolicaoManual42 from '../../assets/images/services/demolicao-manual/demolicao-manual-42.jpg'
import demolicaoManual43 from '../../assets/images/services/demolicao-manual/demolicao-manual-43.jpg'
import demolicaoManual44 from '../../assets/images/services/demolicao-manual/demolicao-manual-44.jpg'
import demolicaoManual45 from '../../assets/images/services/demolicao-manual/demolicao-manual-45.jpg'
import demolicaoManual46 from '../../assets/images/services/demolicao-manual/demolicao-manual-46.jpg'
import demolicaoManual47 from '../../assets/images/services/demolicao-manual/demolicao-manual-47.jpg'
import demolicaoManual48 from '../../assets/images/services/demolicao-manual/demolicao-manual-48.jpg'
import demolicaoManual49 from '../../assets/images/services/demolicao-manual/demolicao-manual-49.jpg'
import demolicaoManual50 from '../../assets/images/services/demolicao-manual/demolicao-manual-50.jpg'
import demolicaoManual51 from '../../assets/images/services/demolicao-manual/demolicao-manual-51.jpg'
import demolicaoManual52 from '../../assets/images/services/demolicao-manual/demolicao-manual-52.jpg'
import demolicaoManual53 from '../../assets/images/services/demolicao-manual/demolicao-manual-53.jpg'
import demolicaoManual54 from '../../assets/images/services/demolicao-manual/demolicao-manual-54.jpg'
import demolicaoManual55 from '../../assets/images/services/demolicao-manual/demolicao-manual-55.jpg'
import demolicaoManual56 from '../../assets/images/services/demolicao-manual/demolicao-manual-56.jpg'
import demolicaoManual57 from '../../assets/images/services/demolicao-manual/demolicao-manual-57.jpg'
import demolicaoManual58 from '../../assets/images/services/demolicao-manual/demolicao-manual-58.jpg'
import demolicaoManual59 from '../../assets/images/services/demolicao-manual/demolicao-manual-59.jpg'
import demolicaoManual60 from '../../assets/images/services/demolicao-manual/demolicao-manual-60.jpg'
import demolicaoManual61 from '../../assets/images/services/demolicao-manual/demolicao-manual-61.jpg'
import demolicaoManual62 from '../../assets/images/services/demolicao-manual/demolicao-manual-62.jpg'
import demolicaoManual63 from '../../assets/images/services/demolicao-manual/demolicao-manual-63.jpg'
import demolicaoManual64 from '../../assets/images/services/demolicao-manual/demolicao-manual-64.jpg'
import demolicaoManual65 from '../../assets/images/services/demolicao-manual/demolicao-manual-65.jpg'
import demolicaoManual66 from '../../assets/images/services/demolicao-manual/demolicao-manual-66.jpg'
import demolicaoManual67 from '../../assets/images/services/demolicao-manual/demolicao-manual-67.jpg'
import demolicaoManual68 from '../../assets/images/services/demolicao-manual/demolicao-manual-68.jpg'
import demolicaoManual69 from '../../assets/images/services/demolicao-manual/demolicao-manual-69.jpg'
import demolicaoManual70 from '../../assets/images/services/demolicao-manual/demolicao-manual-70.jpg'
import demolicaoManual71 from '../../assets/images/services/demolicao-manual/demolicao-manual-71.jpg'
import demolicaoManual72 from '../../assets/images/services/demolicao-manual/demolicao-manual-72.jpg'
import demolicaoManual73 from '../../assets/images/services/demolicao-manual/demolicao-manual-73.jpg'
import demolicaoManual74 from '../../assets/images/services/demolicao-manual/demolicao-manual-74.jpg'
import demolicaoManual75 from '../../assets/images/services/demolicao-manual/demolicao-manual-75.jpg'
import demolicaoManual76 from '../../assets/images/services/demolicao-manual/demolicao-manual-76.jpg'
import demolicaoManual77 from '../../assets/images/services/demolicao-manual/demolicao-manual-77.jpg'
import demolicaoManual78 from '../../assets/images/services/demolicao-manual/demolicao-manual-78.jpg'
import demolicaoManual79 from '../../assets/images/services/demolicao-manual/demolicao-manual-79.jpg'
import demolicaoManual80 from '../../assets/images/services/demolicao-manual/demolicao-manual-80.jpg'
import demolicaoManual81 from '../../assets/images/services/demolicao-manual/demolicao-manual-81.jpg'
import demolicaoManual82 from '../../assets/images/services/demolicao-manual/demolicao-manual-82.jpg'
import demolicaoManual83 from '../../assets/images/services/demolicao-manual/demolicao-manual-83.jpg'
import demolicaoManual84 from '../../assets/images/services/demolicao-manual/demolicao-manual-84.jpg'
import demolicaoManual85 from '../../assets/images/services/demolicao-manual/demolicao-manual-85.jpg'
import demolicaoManual86 from '../../assets/images/services/demolicao-manual/demolicao-manual-86.jpg'
import demolicaoManual87 from '../../assets/images/services/demolicao-manual/demolicao-manual-87.jpg'
import demolicaoManual88 from '../../assets/images/services/demolicao-manual/demolicao-manual-88.jpg'
import demolicaoManual89 from '../../assets/images/services/demolicao-manual/demolicao-manual-89.jpg'
import demolicaoManual90 from '../../assets/images/services/demolicao-manual/demolicao-manual-90.jpg'
import demolicaoManual91 from '../../assets/images/services/demolicao-manual/demolicao-manual-91.jpg'
import demolicaoManual92 from '../../assets/images/services/demolicao-manual/demolicao-manual-92.jpg'
import demolicaoManual93 from '../../assets/images/services/demolicao-manual/demolicao-manual-93.jpg'
import demolicaoManual94 from '../../assets/images/services/demolicao-manual/demolicao-manual-94.jpg'
import demolicaoManual95 from '../../assets/images/services/demolicao-manual/demolicao-manual-95.jpg'
import demolicaoManual96 from '../../assets/images/services/demolicao-manual/demolicao-manual-96.jpg'
import demolicaoManual97 from '../../assets/images/services/demolicao-manual/demolicao-manual-97.jpg'
import demolicaoManual98 from '../../assets/images/services/demolicao-manual/demolicao-manual-98.jpg'
import demolicaoManual99 from '../../assets/images/services/demolicao-manual/demolicao-manual-99.jpg'
import demolicaoManual100 from '../../assets/images/services/demolicao-manual/demolicao-manual-100.jpg'
import demolicaoManual101 from '../../assets/images/services/demolicao-manual/demolicao-manual-101.jpg'
import demolicaoManual102 from '../../assets/images/services/demolicao-manual/demolicao-manual-102.jpg'
import demolicaoManual103 from '../../assets/images/services/demolicao-manual/demolicao-manual-103.jpg'
import demolicaoManual104 from '../../assets/images/services/demolicao-manual/demolicao-manual-104.jpg'
import demolicaoManual105 from '../../assets/images/services/demolicao-manual/demolicao-manual-105.jpg'
import demolicaoManual106 from '../../assets/images/services/demolicao-manual/demolicao-manual-106.jpg'
import demolicaoManual107 from '../../assets/images/services/demolicao-manual/demolicao-manual-107.jpg'
import demolicaoManual108 from '../../assets/images/services/demolicao-manual/demolicao-manual-108.jpg'
import demolicaoManual109 from '../../assets/images/services/demolicao-manual/demolicao-manual-109.jpg'
import demolicaoManual110 from '../../assets/images/services/demolicao-manual/demolicao-manual-110.jpg'
import demolicaoManual111 from '../../assets/images/services/demolicao-manual/demolicao-manual-111.jpg'
import demolicaoManual112 from '../../assets/images/services/demolicao-manual/demolicao-manual-112.jpg'
import demolicaoManual113 from '../../assets/images/services/demolicao-manual/demolicao-manual-113.jpg'
import demolicaoManual114 from '../../assets/images/services/demolicao-manual/demolicao-manual-114.jpg'
import demolicaoManual115 from '../../assets/images/services/demolicao-manual/demolicao-manual-115.jpg'
import demolicaoManual116 from '../../assets/images/services/demolicao-manual/demolicao-manual-116.jpg'
import demolicaoManual117 from '../../assets/images/services/demolicao-manual/demolicao-manual-117.jpg'
import demolicaoManual118 from '../../assets/images/services/demolicao-manual/demolicao-manual-118.jpg'
import demolicaoManual119 from '../../assets/images/services/demolicao-manual/demolicao-manual-119.jpg'
import demolicaoManual120 from '../../assets/images/services/demolicao-manual/demolicao-manual-120.jpg'
import demolicaoManual121 from '../../assets/images/services/demolicao-manual/demolicao-manual-121.jpg'
import demolicaoManual122 from '../../assets/images/services/demolicao-manual/demolicao-manual-122.jpg'

import demolicaoSilenciosa0 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-0.jpg'
import demolicaoSilenciosa1 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-1.jpg'
import demolicaoSilenciosa2 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-2.jpg'
import demolicaoSilenciosa3 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-3.jpg'
import demolicaoSilenciosa4 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-4.jpg'
import demolicaoSilenciosa5 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-5.jpg'
import demolicaoSilenciosa6 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-6.jpg'
import demolicaoSilenciosa7 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-7.jpg'
import demolicaoSilenciosa8 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-8.jpg'
import demolicaoSilenciosa9 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-9.jpg'
import demolicaoSilenciosa10 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-10.jpg'
import demolicaoSilenciosa11 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-11.jpg'
import demolicaoSilenciosa12 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-12.jpg'
import demolicaoSilenciosa13 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-13.jpg'
import demolicaoSilenciosa14 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-14.jpg'
import demolicaoSilenciosa15 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-15.jpg'
import demolicaoSilenciosa16 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-16.jpg'
import demolicaoSilenciosa17 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-17.jpg'
import demolicaoSilenciosa18 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-18.jpg'
import demolicaoSilenciosa19 from '../../assets/images/services/demolicao-silenciosa/demolicao-silenciosa-19.jpg'

const bannerSrc = mock

export const SERVICES: ServiceItemTypes[] = [
  {
    id: '80a331ba-a105-11ed-a8fc-0242ac120002',
    bannerSrc: demolicaoSustentavel4,
    title: 'Demolição Sustentável',
    description:
      'Esse tipo de demolição visa ao cuidado com o meio ambiente. Há uma preocupação com o descarte correto dos entulhos e o reaproveitamento de materiais que são direcionados ao nosso depósito. Além disso, prezamos pelo cuidado com o terreno, evitando danos ao solo e à vegetação dos arredores.',
    images: [
      demolicaoSustentavel0,
      demolicaoSustentavel1,
      demolicaoSustentavel2,
      demolicaoSustentavel3,
      demolicaoSustentavel4,
      demolicaoSustentavel5,
      demolicaoSustentavel6,
      demolicaoSustentavel7,
      demolicaoSustentavel8,
      demolicaoSustentavel9,
      demolicaoSustentavel10,
      demolicaoSustentavel10,
      demolicaoSustentavel11,
      demolicaoSustentavel12,
      demolicaoSustentavel13,
      demolicaoSustentavel14,
      demolicaoSustentavel15,
      demolicaoSustentavel16,
      demolicaoSustentavel17,
      demolicaoSustentavel18,
      demolicaoSustentavel19
    ]
  },
  {
    id: '8c889088-a105-11ed-a8fc-0242ac120002',
    bannerSrc: demolicaoMecanizada109,
    title: 'Demolição Mecanizada',
    description:
      'É caracterizada pela utilização de ferramentas e equipamentos mecânicos. Com máquinas de grande e médio porte, essa técnica de demolição exige um menor número de colaboradores, mas requer especialização, assim, garante-se a eficiência e a qualidade do serviço.',
    images: [
      demolicaoMecanizada0,
      demolicaoMecanizada1,
      demolicaoMecanizada2,
      demolicaoMecanizada3,
      demolicaoMecanizada4,
      demolicaoMecanizada5,
      demolicaoMecanizada6,
      demolicaoMecanizada7,
      demolicaoMecanizada8,
      demolicaoMecanizada9,
      demolicaoMecanizada10,
      demolicaoMecanizada11,
      demolicaoMecanizada12,
      demolicaoMecanizada13,
      demolicaoMecanizada14,
      demolicaoMecanizada15,
      demolicaoMecanizada16,
      demolicaoMecanizada17,
      demolicaoMecanizada18,
      demolicaoMecanizada19,
      demolicaoMecanizada20,
      demolicaoMecanizada21,
      demolicaoMecanizada22,
      demolicaoMecanizada23,
      demolicaoMecanizada24,
      demolicaoMecanizada25,
      demolicaoMecanizada26,
      demolicaoMecanizada27,
      demolicaoMecanizada28,
      demolicaoMecanizada29,
      demolicaoMecanizada30,
      demolicaoMecanizada31,
      demolicaoMecanizada32,
      demolicaoMecanizada33,
      demolicaoMecanizada34,
      demolicaoMecanizada35,
      demolicaoMecanizada36,
      demolicaoMecanizada37,
      demolicaoMecanizada38,
      demolicaoMecanizada39,
      demolicaoMecanizada40,
      demolicaoMecanizada41,
      demolicaoMecanizada42,
      demolicaoMecanizada43,
      demolicaoMecanizada44,
      demolicaoMecanizada45,
      demolicaoMecanizada46,
      demolicaoMecanizada47,
      demolicaoMecanizada48,
      demolicaoMecanizada49,
      demolicaoMecanizada50,
      demolicaoMecanizada51,
      demolicaoMecanizada52,
      demolicaoMecanizada53,
      demolicaoMecanizada54,
      demolicaoMecanizada55,
      demolicaoMecanizada56,
      demolicaoMecanizada57,
      demolicaoMecanizada58,
      demolicaoMecanizada59,
      demolicaoMecanizada60,
      demolicaoMecanizada61,
      demolicaoMecanizada62,
      demolicaoMecanizada63,
      demolicaoMecanizada64,
      demolicaoMecanizada65,
      demolicaoMecanizada66,
      demolicaoMecanizada67,
      demolicaoMecanizada68,
      demolicaoMecanizada69,
      demolicaoMecanizada70,
      demolicaoMecanizada71,
      demolicaoMecanizada72,
      demolicaoMecanizada73,
      demolicaoMecanizada74,
      demolicaoMecanizada75,
      demolicaoMecanizada76,
      demolicaoMecanizada77,
      demolicaoMecanizada78,
      demolicaoMecanizada79,
      demolicaoMecanizada80,
      demolicaoMecanizada81,
      demolicaoMecanizada82,
      demolicaoMecanizada83,
      demolicaoMecanizada84,
      demolicaoMecanizada85,
      demolicaoMecanizada86,
      demolicaoMecanizada87,
      demolicaoMecanizada88,
      demolicaoMecanizada89,
      demolicaoMecanizada90,
      demolicaoMecanizada91,
      demolicaoMecanizada92,
      demolicaoMecanizada93,
      demolicaoMecanizada94,
      demolicaoMecanizada95,
      demolicaoMecanizada96,
      demolicaoMecanizada97,
      demolicaoMecanizada98,
      demolicaoMecanizada99,
      demolicaoMecanizada100,
      demolicaoMecanizada101,
      demolicaoMecanizada102,
      demolicaoMecanizada103,
      demolicaoMecanizada104,
      demolicaoMecanizada105,
      demolicaoMecanizada106,
      demolicaoMecanizada107,
      demolicaoMecanizada108,
      demolicaoMecanizada109,
      demolicaoMecanizada110,
      demolicaoMecanizada111,
      demolicaoMecanizada112,
      demolicaoMecanizada113,
      demolicaoMecanizada114,
      demolicaoMecanizada115,
      demolicaoMecanizada116,
      demolicaoMecanizada117,
      demolicaoMecanizada118,
      demolicaoMecanizada119,
      demolicaoMecanizada120,
      demolicaoMecanizada121,
      demolicaoMecanizada122,
      demolicaoMecanizada123,
      demolicaoMecanizada124,
      demolicaoMecanizada125,
      demolicaoMecanizada126,
      demolicaoMecanizada127,
      demolicaoMecanizada128,
      demolicaoMecanizada129,
      demolicaoMecanizada130,
      demolicaoMecanizada131,
      demolicaoMecanizada132,
      demolicaoMecanizada133,
      demolicaoMecanizada134,
      demolicaoMecanizada135,
      demolicaoMecanizada136,
      demolicaoMecanizada137,
      demolicaoMecanizada138,
      demolicaoMecanizada139,
      demolicaoMecanizada140,
      demolicaoMecanizada141,
      demolicaoMecanizada142,
      demolicaoMecanizada143,
      demolicaoMecanizada144,
      demolicaoMecanizada145,
      demolicaoMecanizada146,
      demolicaoMecanizada147,
      demolicaoMecanizada148,
      demolicaoMecanizada149,
      demolicaoMecanizada150,
      demolicaoMecanizada151,
      demolicaoMecanizada152,
      demolicaoMecanizada153,
      demolicaoMecanizada154,
      demolicaoMecanizada155,
      demolicaoMecanizada156,
      demolicaoMecanizada157,
      demolicaoMecanizada158,
      demolicaoMecanizada159,
      demolicaoMecanizada160,
      demolicaoMecanizada161,
      demolicaoMecanizada162,
      demolicaoMecanizada163,
      demolicaoMecanizada164,
      demolicaoMecanizada165,
      demolicaoMecanizada166,
      demolicaoMecanizada167,
      demolicaoMecanizada168,
      demolicaoMecanizada169,
      demolicaoMecanizada170,
      demolicaoMecanizada171
    ]
  },
  {
    id: '94517fe6-a105-11ed-a8fc-0242ac120002',
    bannerSrc: demolicaoSilenciosa19,
    title: 'Demolição Silenciosa',
    description:
      'Indicada para espaços com restrição de barulho, é comum que se utilize a técnica de esmagamento para demolir e limpar terrenos sem causar desconforto às imediações.',
    images: [
      demolicaoSilenciosa0,
      demolicaoSilenciosa1,
      demolicaoSilenciosa2,
      demolicaoSilenciosa3,
      demolicaoSilenciosa4,
      demolicaoSilenciosa5,
      demolicaoSilenciosa6,
      demolicaoSilenciosa7,
      demolicaoSilenciosa8,
      demolicaoSilenciosa9,
      demolicaoSilenciosa10,
      demolicaoSilenciosa11,
      demolicaoSilenciosa12,
      demolicaoSilenciosa13,
      demolicaoSilenciosa14,
      demolicaoSilenciosa15,
      demolicaoSilenciosa16,
      demolicaoSilenciosa17,
      demolicaoSilenciosa18
    ]
  },
  {
    id: '97c52786-a105-11ed-a8fc-0242ac120002',
    bannerSrc: demolicaoManual18,
    title: 'Demolição Manual',
    description:
      'A demolição manual conta com mão de obra treinada para trabalhar atenta às necessidades da estrutura. É recomendada para casos em que se pretende reaproveitar materiais e requerem um processo cuidadoso.',
    images: [
      demolicaoManual0,
      demolicaoManual1,
      demolicaoManual2,
      demolicaoManual3,
      demolicaoManual4,
      demolicaoManual5,
      demolicaoManual6,
      demolicaoManual7,
      demolicaoManual8,
      demolicaoManual9,
      demolicaoManual10,
      demolicaoManual11,
      demolicaoManual12,
      demolicaoManual13,
      demolicaoManual14,
      demolicaoManual15,
      demolicaoManual16,
      demolicaoManual17,
      demolicaoManual18,
      demolicaoManual19,
      demolicaoManual20,
      demolicaoManual21,
      demolicaoManual22,
      demolicaoManual23,
      demolicaoManual24,
      demolicaoManual25,
      demolicaoManual26,
      demolicaoManual27,
      demolicaoManual28,
      demolicaoManual29,
      demolicaoManual30,
      demolicaoManual31,
      demolicaoManual32,
      demolicaoManual33,
      demolicaoManual34,
      demolicaoManual35,
      demolicaoManual36,
      demolicaoManual37,
      demolicaoManual38,
      demolicaoManual39,
      demolicaoManual40,
      demolicaoManual41,
      demolicaoManual42,
      demolicaoManual43,
      demolicaoManual44,
      demolicaoManual45,
      demolicaoManual46,
      demolicaoManual47,
      demolicaoManual48,
      demolicaoManual49,
      demolicaoManual50,
      demolicaoManual51,
      demolicaoManual52,
      demolicaoManual53,
      demolicaoManual54,
      demolicaoManual55,
      demolicaoManual56,
      demolicaoManual57,
      demolicaoManual58,
      demolicaoManual59,
      demolicaoManual60,
      demolicaoManual61,
      demolicaoManual62,
      demolicaoManual63,
      demolicaoManual64,
      demolicaoManual65,
      demolicaoManual66,
      demolicaoManual67,
      demolicaoManual68,
      demolicaoManual69,
      demolicaoManual70,
      demolicaoManual71,
      demolicaoManual72,
      demolicaoManual73,
      demolicaoManual74,
      demolicaoManual75,
      demolicaoManual76,
      demolicaoManual77,
      demolicaoManual78,
      demolicaoManual79,
      demolicaoManual80,
      demolicaoManual81,
      demolicaoManual82,
      demolicaoManual83,
      demolicaoManual84,
      demolicaoManual85,
      demolicaoManual86,
      demolicaoManual87,
      demolicaoManual88,
      demolicaoManual89,
      demolicaoManual90,
      demolicaoManual91,
      demolicaoManual92,
      demolicaoManual93,
      demolicaoManual94,
      demolicaoManual95,
      demolicaoManual96,
      demolicaoManual97,
      demolicaoManual98,
      demolicaoManual99,
      demolicaoManual100,
      demolicaoManual101,
      demolicaoManual102,
      demolicaoManual103,
      demolicaoManual104,
      demolicaoManual105,
      demolicaoManual106,
      demolicaoManual107,
      demolicaoManual108,
      demolicaoManual109,
      demolicaoManual110,
      demolicaoManual111,
      demolicaoManual112,
      demolicaoManual113,
      demolicaoManual114,
      demolicaoManual115,
      demolicaoManual116,
      demolicaoManual117,
      demolicaoManual118,
      demolicaoManual119,
      demolicaoManual120,
      demolicaoManual121,
      demolicaoManual122
    ]
  },
  {
    id: '9e5f13d6-a105-11ed-a8fc-0242ac120002',
    bannerSrc: demolicaoAltoRisco5,
    title: 'Demolição de Alto Risco',
    description:
      'Esse serviço é executado em áreas de difícil acesso, grandes alturas, próximas a espaços residenciais e/ou comerciais ou com transeuntes nos arredores. Exige uma maior atenção à segurança e ao planejamento da demolição, contando sempre com colaboradores especializados.',
    images: [
      demolicaoAltoRisco0,
      demolicaoAltoRisco1,
      demolicaoAltoRisco2,
      demolicaoAltoRisco3,
      demolicaoAltoRisco4,
      demolicaoAltoRisco5,
      demolicaoAltoRisco6,
      demolicaoAltoRisco7,
      demolicaoAltoRisco8,
      demolicaoAltoRisco9,
      demolicaoAltoRisco10,
      demolicaoAltoRisco11,
      demolicaoAltoRisco12,
      demolicaoAltoRisco13,
      demolicaoAltoRisco14,
      demolicaoAltoRisco15,
      demolicaoAltoRisco16,
      demolicaoAltoRisco17,
      demolicaoAltoRisco18,
      demolicaoAltoRisco19,
      demolicaoAltoRisco20,
      demolicaoAltoRisco21,
      demolicaoAltoRisco22,
      demolicaoAltoRisco23,
      demolicaoAltoRisco24,
      demolicaoAltoRisco25,
      demolicaoAltoRisco26,
      demolicaoAltoRisco27,
      demolicaoAltoRisco28,
      demolicaoAltoRisco29,
      demolicaoAltoRisco30,
      demolicaoAltoRisco31,
      demolicaoAltoRisco32,
      demolicaoAltoRisco33,
      demolicaoAltoRisco34,
      demolicaoAltoRisco35,
      demolicaoAltoRisco36,
      demolicaoAltoRisco37,
      demolicaoAltoRisco38,
      demolicaoAltoRisco39,
      demolicaoAltoRisco40,
      demolicaoAltoRisco41,
      demolicaoAltoRisco42,
      demolicaoAltoRisco43,
      demolicaoAltoRisco44,
      demolicaoAltoRisco45,
      demolicaoAltoRisco46,
      demolicaoAltoRisco47,
      demolicaoAltoRisco48,
      demolicaoAltoRisco49,
      demolicaoAltoRisco50,
      demolicaoAltoRisco51,
      demolicaoAltoRisco52,
      demolicaoAltoRisco53,
      demolicaoAltoRisco54,
      demolicaoAltoRisco55,
      demolicaoAltoRisco56,
      demolicaoAltoRisco57,
      demolicaoAltoRisco58,
      demolicaoAltoRisco59,
      demolicaoAltoRisco60,
      demolicaoAltoRisco61,
      demolicaoAltoRisco62,
      demolicaoAltoRisco63,
      demolicaoAltoRisco64,
      demolicaoAltoRisco65,
      demolicaoAltoRisco66,
      demolicaoAltoRisco67,
      demolicaoAltoRisco68,
      demolicaoAltoRisco69,
      demolicaoAltoRisco70,
      demolicaoAltoRisco71,
      demolicaoAltoRisco72,
      demolicaoAltoRisco73
    ]
  },
  {
    id: 'a3225f7c-a105-11ed-a8fc-0242ac120002',
    bannerSrc: desmontagemDesativacaoIndustrial117,
    title: 'Desmontagem e Desativação Industrial',
    description:
      'Procedimento que visa à elaboração de um projeto para, além de tratar da demolição da obra, gerenciar o maquinário e as estruturas existentes no espaço industrial, contando sempre com normas rígidas de segurança e diferentes colaboradores para analisar o caso.',
    images: [
      desmontagemDesativacaoIndustrial0,
      desmontagemDesativacaoIndustrial1,
      desmontagemDesativacaoIndustrial2,
      desmontagemDesativacaoIndustrial3,
      desmontagemDesativacaoIndustrial4,
      desmontagemDesativacaoIndustrial5,
      desmontagemDesativacaoIndustrial6,
      desmontagemDesativacaoIndustrial7,
      desmontagemDesativacaoIndustrial8,
      desmontagemDesativacaoIndustrial9,
      desmontagemDesativacaoIndustrial10,
      desmontagemDesativacaoIndustrial11,
      desmontagemDesativacaoIndustrial12,
      desmontagemDesativacaoIndustrial13,
      desmontagemDesativacaoIndustrial14,
      desmontagemDesativacaoIndustrial15,
      desmontagemDesativacaoIndustrial16,
      desmontagemDesativacaoIndustrial17,
      desmontagemDesativacaoIndustrial18,
      desmontagemDesativacaoIndustrial19,
      desmontagemDesativacaoIndustrial20,
      desmontagemDesativacaoIndustrial21,
      desmontagemDesativacaoIndustrial22,
      desmontagemDesativacaoIndustrial23,
      desmontagemDesativacaoIndustrial24,
      desmontagemDesativacaoIndustrial25,
      desmontagemDesativacaoIndustrial26,
      desmontagemDesativacaoIndustrial27,
      desmontagemDesativacaoIndustrial28,
      desmontagemDesativacaoIndustrial29,
      desmontagemDesativacaoIndustrial30,
      desmontagemDesativacaoIndustrial31,
      desmontagemDesativacaoIndustrial32,
      desmontagemDesativacaoIndustrial33,
      desmontagemDesativacaoIndustrial34,
      desmontagemDesativacaoIndustrial35,
      desmontagemDesativacaoIndustrial36,
      desmontagemDesativacaoIndustrial37,
      desmontagemDesativacaoIndustrial38,
      desmontagemDesativacaoIndustrial39,
      desmontagemDesativacaoIndustrial40,
      desmontagemDesativacaoIndustrial41,
      desmontagemDesativacaoIndustrial42,
      desmontagemDesativacaoIndustrial43,
      desmontagemDesativacaoIndustrial44,
      desmontagemDesativacaoIndustrial45,
      desmontagemDesativacaoIndustrial46,
      desmontagemDesativacaoIndustrial47,
      desmontagemDesativacaoIndustrial48,
      desmontagemDesativacaoIndustrial49,
      desmontagemDesativacaoIndustrial50,
      desmontagemDesativacaoIndustrial51,
      desmontagemDesativacaoIndustrial52,
      desmontagemDesativacaoIndustrial53,
      desmontagemDesativacaoIndustrial54,
      desmontagemDesativacaoIndustrial55,
      desmontagemDesativacaoIndustrial56,
      desmontagemDesativacaoIndustrial57,
      desmontagemDesativacaoIndustrial58,
      desmontagemDesativacaoIndustrial59,
      desmontagemDesativacaoIndustrial60,
      desmontagemDesativacaoIndustrial61,
      desmontagemDesativacaoIndustrial62,
      desmontagemDesativacaoIndustrial63,
      desmontagemDesativacaoIndustrial64,
      desmontagemDesativacaoIndustrial65,
      desmontagemDesativacaoIndustrial66,
      desmontagemDesativacaoIndustrial67,
      desmontagemDesativacaoIndustrial68,
      desmontagemDesativacaoIndustrial69,
      desmontagemDesativacaoIndustrial70,
      desmontagemDesativacaoIndustrial71,
      desmontagemDesativacaoIndustrial72,
      desmontagemDesativacaoIndustrial73,
      desmontagemDesativacaoIndustrial74,
      desmontagemDesativacaoIndustrial75,
      desmontagemDesativacaoIndustrial76,
      desmontagemDesativacaoIndustrial77,
      desmontagemDesativacaoIndustrial78,
      desmontagemDesativacaoIndustrial79,
      desmontagemDesativacaoIndustrial80,
      desmontagemDesativacaoIndustrial81,
      desmontagemDesativacaoIndustrial82,
      desmontagemDesativacaoIndustrial83,
      desmontagemDesativacaoIndustrial84,
      desmontagemDesativacaoIndustrial85,
      desmontagemDesativacaoIndustrial86,
      desmontagemDesativacaoIndustrial87,
      desmontagemDesativacaoIndustrial88,
      desmontagemDesativacaoIndustrial89,
      desmontagemDesativacaoIndustrial90,
      desmontagemDesativacaoIndustrial91,
      desmontagemDesativacaoIndustrial92,
      desmontagemDesativacaoIndustrial93,
      desmontagemDesativacaoIndustrial94,
      desmontagemDesativacaoIndustrial95,
      desmontagemDesativacaoIndustrial96,
      desmontagemDesativacaoIndustrial97,
      desmontagemDesativacaoIndustrial98,
      desmontagemDesativacaoIndustrial99,
      desmontagemDesativacaoIndustrial100,
      desmontagemDesativacaoIndustrial101,
      desmontagemDesativacaoIndustrial102,
      desmontagemDesativacaoIndustrial103,
      desmontagemDesativacaoIndustrial104,
      desmontagemDesativacaoIndustrial105,
      desmontagemDesativacaoIndustrial106,
      desmontagemDesativacaoIndustrial107,
      desmontagemDesativacaoIndustrial108,
      desmontagemDesativacaoIndustrial109,
      desmontagemDesativacaoIndustrial110,
      desmontagemDesativacaoIndustrial111,
      desmontagemDesativacaoIndustrial112,
      desmontagemDesativacaoIndustrial113,
      desmontagemDesativacaoIndustrial114,
      desmontagemDesativacaoIndustrial115,
      desmontagemDesativacaoIndustrial116,
      desmontagemDesativacaoIndustrial117,
      desmontagemDesativacaoIndustrial118,
      desmontagemDesativacaoIndustrial119,
      desmontagemDesativacaoIndustrial120,
      desmontagemDesativacaoIndustrial121,
      desmontagemDesativacaoIndustrial122,
      desmontagemDesativacaoIndustrial123,
      desmontagemDesativacaoIndustrial124,
      desmontagemDesativacaoIndustrial125,
      desmontagemDesativacaoIndustrial126,
      desmontagemDesativacaoIndustrial127,
      desmontagemDesativacaoIndustrial128,
      desmontagemDesativacaoIndustrial129,
      desmontagemDesativacaoIndustrial130,
      desmontagemDesativacaoIndustrial131,
      desmontagemDesativacaoIndustrial132,
      desmontagemDesativacaoIndustrial133,
      desmontagemDesativacaoIndustrial134,
      desmontagemDesativacaoIndustrial135,
      desmontagemDesativacaoIndustrial136,
      desmontagemDesativacaoIndustrial137,
      desmontagemDesativacaoIndustrial138,
      desmontagemDesativacaoIndustrial139,
      desmontagemDesativacaoIndustrial140,
      desmontagemDesativacaoIndustrial141,
      desmontagemDesativacaoIndustrial142,
      desmontagemDesativacaoIndustrial143,
      desmontagemDesativacaoIndustrial144,
      desmontagemDesativacaoIndustrial145,
      desmontagemDesativacaoIndustrial146,
      desmontagemDesativacaoIndustrial147,
      desmontagemDesativacaoIndustrial148,
      desmontagemDesativacaoIndustrial149,
      desmontagemDesativacaoIndustrial150,
      desmontagemDesativacaoIndustrial151,
      desmontagemDesativacaoIndustrial152,
      desmontagemDesativacaoIndustrial153,
      desmontagemDesativacaoIndustrial154,
      desmontagemDesativacaoIndustrial155,
      desmontagemDesativacaoIndustrial156,
      desmontagemDesativacaoIndustrial157,
      desmontagemDesativacaoIndustrial158,
      desmontagemDesativacaoIndustrial159,
      desmontagemDesativacaoIndustrial160,
      desmontagemDesativacaoIndustrial161,
      desmontagemDesativacaoIndustrial162,
      desmontagemDesativacaoIndustrial163,
      desmontagemDesativacaoIndustrial164,
      desmontagemDesativacaoIndustrial165,
      desmontagemDesativacaoIndustrial166,
      desmontagemDesativacaoIndustrial167,
      desmontagemDesativacaoIndustrial168,
      desmontagemDesativacaoIndustrial169,
      desmontagemDesativacaoIndustrial170,
      desmontagemDesativacaoIndustrial171,
      desmontagemDesativacaoIndustrial172,
      desmontagemDesativacaoIndustrial173,
      desmontagemDesativacaoIndustrial174,
      desmontagemDesativacaoIndustrial175,
      desmontagemDesativacaoIndustrial176,
      desmontagemDesativacaoIndustrial177,
      desmontagemDesativacaoIndustrial178,
      desmontagemDesativacaoIndustrial179,
      desmontagemDesativacaoIndustrial180,
      desmontagemDesativacaoIndustrial181,
      desmontagemDesativacaoIndustrial182,
      desmontagemDesativacaoIndustrial183,
      desmontagemDesativacaoIndustrial184,
      desmontagemDesativacaoIndustrial185,
      desmontagemDesativacaoIndustrial186,
      desmontagemDesativacaoIndustrial187,
      desmontagemDesativacaoIndustrial188,
      desmontagemDesativacaoIndustrial189,
      desmontagemDesativacaoIndustrial190,
      desmontagemDesativacaoIndustrial191,
      desmontagemDesativacaoIndustrial192,
      desmontagemDesativacaoIndustrial193,
      desmontagemDesativacaoIndustrial194,
      desmontagemDesativacaoIndustrial195,
      desmontagemDesativacaoIndustrial196,
      desmontagemDesativacaoIndustrial197,
      desmontagemDesativacaoIndustrial198,
      desmontagemDesativacaoIndustrial199,
      desmontagemDesativacaoIndustrial200,
      desmontagemDesativacaoIndustrial201,
      desmontagemDesativacaoIndustrial202,
      desmontagemDesativacaoIndustrial203,
      desmontagemDesativacaoIndustrial204,
      desmontagemDesativacaoIndustrial205,
      desmontagemDesativacaoIndustrial206,
      desmontagemDesativacaoIndustrial207,
      desmontagemDesativacaoIndustrial208,
      desmontagemDesativacaoIndustrial209,
      desmontagemDesativacaoIndustrial210,
      desmontagemDesativacaoIndustrial211,
      desmontagemDesativacaoIndustrial212,
      desmontagemDesativacaoIndustrial213,
      desmontagemDesativacaoIndustrial214,
      desmontagemDesativacaoIndustrial215,
      desmontagemDesativacaoIndustrial216,
      desmontagemDesativacaoIndustrial217,
      desmontagemDesativacaoIndustrial218,
      desmontagemDesativacaoIndustrial219,
      desmontagemDesativacaoIndustrial220,
      desmontagemDesativacaoIndustrial221,
      desmontagemDesativacaoIndustrial222,
      desmontagemDesativacaoIndustrial223,
      desmontagemDesativacaoIndustrial224,
      desmontagemDesativacaoIndustrial225,
      desmontagemDesativacaoIndustrial226,
      desmontagemDesativacaoIndustrial227,
      desmontagemDesativacaoIndustrial228,
      desmontagemDesativacaoIndustrial229,
      desmontagemDesativacaoIndustrial230,
      desmontagemDesativacaoIndustrial231,
      desmontagemDesativacaoIndustrial232,
      desmontagemDesativacaoIndustrial233
    ]
  },
  {
    id: 'a79eb0b4-a105-11ed-a8fc-0242ac120002',
    bannerSrc: aluguelCacamba16,
    title: 'Aluguel de Caçambas',
    description:
      'A partir de um orçamento, são fornecidas as caçambas necessárias para o projeto de demolição ou construção, pensando sempre no correto descarte de entulho. Na Demolidora Solon, você conta, ainda, com equipamentos resistentes, atendimento pós-venda e equipe técnica qualificada.',
    images: [
      aluguelCacamba0,
      aluguelCacamba1,
      aluguelCacamba2,
      aluguelCacamba3,
      aluguelCacamba4,
      aluguelCacamba5,
      aluguelCacamba6,
      aluguelCacamba7,
      aluguelCacamba8,
      aluguelCacamba9,
      aluguelCacamba10,
      aluguelCacamba11,
      aluguelCacamba12,
      aluguelCacamba13,
      aluguelCacamba14,
      aluguelCacamba15,
      aluguelCacamba16,
      aluguelCacamba17,
      aluguelCacamba18,
      aluguelCacamba19,
      aluguelCacamba20
    ]
  }
]

const getHardCoddedPath = (
  howManyTimes: number,
  title: string,
  path: string
) => {
  const imports = []
  const titles = []
  for (let index = 0; index < howManyTimes; index++) {
    imports.push(
      `import ${title}${index} from '../../assets/images/services/${path}/${path}-${index}.jpg'`
    )
    titles.push(`${title}${index}`)
  }
  console.log(imports.join('\n'))
  console.log(titles.join(',\n'))
}

export default () => {
  return (
    <Container>
      <ServiceStyles>
        {SERVICES.map((service) => (
          <ServiceItemComponent key={service.id} item={service} />
        ))}
      </ServiceStyles>
    </Container>
  )
}
