<template>
    <div>
        <component
                v-for="(node, index) in parsedHtml"
                :key="index"
                :is="node.tag"
                v-bind="node.attributes"
        >
            <template v-if="node.children">
                <SafeHtmlRenderer :html="node.children" />
            </template>
            <template v-else>{{ node.text }}</template>
        </component>
    </div>
</template>

<script setup>
import { computed } from 'vue';

// Props
const props = defineProps({
    html: {
        type: String,
        required: true,
    },
});
console.log(props.html)

// Parse the HTML string into a structure
const parsedHtml = computed(() => parseHtmlToTree(props.html));


// Function to parse HTML into a tree structure
function parseHtmlToTree(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return Array.from(template.content.childNodes).map(serializeNode);
}

function serializeNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        return { text: node.textContent };
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
        return {
            tag: node.tagName.toLowerCase(),
            attributes: Array.from(node.attributes).reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {}),
            children: node.innerHTML ? parseHtmlToTree(node.innerHTML) : null,
        };
    }
    return null;
}
</script>
