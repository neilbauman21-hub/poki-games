//temp script to stop logging skin error

(function () {
    pc.SkinInstance.prototype.resolve = function (rootBone, entity) {
        this.rootBone = rootBone;

        const skin = this.skin;
        const bones = [];

        for (let j = 0; j < skin.boneNames.length; j++) {
            const boneName = skin.boneNames[j];
            let bone = rootBone.findByName(boneName);

            if (!bone) {
                //Debug.error(`Failed to find bone [${boneName}] in the entity hierarchy, RenderComponent on ${entity.name}, rootBone: ${rootBone.name}`);
                bone = entity;
            }

            bones.push(bone);
        }

        this.bones = bones;
    }
})()