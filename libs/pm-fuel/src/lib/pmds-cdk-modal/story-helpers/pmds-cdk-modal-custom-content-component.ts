////////Angular imports
import { Component, Inject } from '@angular/core';
////////Component imports
import {
	PMDS_CDK_MODAL_DATA_TOKEN,
	IPmdsCdkModalData,
} from '../models/pmds-cdk-modal.model';
import { PmdsCdkModalComponent } from '../pmds-cdk-modal.component';

@Component({
	standalone: true,
	imports: [PmdsCdkModalComponent],
	template: `
		<pmds-cdk-modal>
			<div body>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
					eius nihil suscipit tempore inventore et animi incidunt, hic
					recusandae laboriosam rem adipisci explicabo quibusdam autem
					repudiandae veniam omnis beatae nobis qui sit earum quisquam
					ipsam accusamus? Magni aliquam nulla perferendis officia
					facilis nemo quam labore dolorum corrupti, nesciunt hic
					ullam velit voluptate ut similique tenetur inventore,
					doloribus dignissimos, numquam quasi quae porro! Temporibus
					eum ipsa adipisci rem reprehenderit sequi impedit assumenda
					amet nemo in doloremque veritatis, nisi, architecto harum
					ducimus dignissimos dolores! Id obcaecati aut voluptate
					magnam voluptatibus, quasi tempora, aliquam molestiae nobis
					tempore, fuga incidunt beatae deserunt aspernatur deleniti
					quas cumque quis. Impedit qui aliquid corrupti omnis eum
					dolores veniam magnam obcaecati consectetur, dolor ex harum
					minima mollitia perferendis explicabo nihil praesentium
					eveniet neque iste, repellendus dicta voluptas? Nemo laborum
					eaque harum dolore perspiciatis maxime fugiat recusandae
					suscipit facere cumque molestiae est numquam eum ratione
					veritatis repellendus exercitationem optio temporibus quos
					soluta explicabo, voluptas aperiam corporis quidem.
					Dignissimos maxime adipisci itaque labore sunt voluptate
					nemo, soluta voluptatem vero atque doloribus! Optio sit
					saepe fugit ipsa, ipsum similique ad beatae nulla, quae
					repellat odio nemo. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Vel eius nihil suscipit tempore inventore
					et animi incidunt, hic recusandae laboriosam rem adipisci
					explicabo quibusdam autem repudiandae veniam omnis beatae
					nobis qui sit earum quisquam ipsam accusamus? Magni aliquam
					nulla perferendis officia facilis nemo quam labore dolorum
					corrupti, nesciunt hic ullam velit voluptate ut similique
					tenetur inventore, doloribus dignissimos, numquam quasi quae
					porro! Temporibus eum ipsa adipisci rem reprehenderit sequi
					impedit assumenda amet nemo in doloremque veritatis, nisi,
					architecto harum ducimus dignissimos dolores! Id obcaecati
					aut voluptate magnam voluptatibus, quasi tempora, aliquam
					molestiae nobis tempore, fuga incidunt beatae deserunt
					aspernatur deleniti quas cumque quis. Impedit qui aliquid
					corrupti omnis eum dolores veniam magnam obcaecati
					consectetur, dolor ex harum minima mollitia perferendis
					explicabo nihil praesentium eveniet neque iste, repellendus
					dicta voluptas? Nemo laborum eaque harum dolore perspiciatis
					maxime fugiat recusandae suscipit facere cumque molestiae
					est numquam eum ratione veritatis repellendus exercitationem
					optio temporibus quos soluta explicabo, voluptas aperiam
					corporis quidem. Dignissimos maxime adipisci itaque labore
					sunt voluptate nemo, soluta voluptatem vero atque doloribus!
					Optio sit saepe fugit ipsa, ipsum similique ad beatae nulla,
					quae repellat odio nemo.
				</p>
			</div>
		</pmds-cdk-modal>
	`,
})
export class ModalCustomContentComponent {
	constructor(
		@Inject(PMDS_CDK_MODAL_DATA_TOKEN)
		public data: IPmdsCdkModalData<unknown>
	) {}
}
