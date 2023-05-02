import { FC } from 'react'
import {
    DiBootstrap, DiCss3, DiFirebase, DiGithubBadge, DiHeroku, DiHtml5, DiJsBadge, DiMongodb, DiReact, DiVisualstudio
} from "react-icons/di";


interface IconSelectorProps {
    iconName: string;
    size: number;
}

const IconSelector: FC<IconSelectorProps> = ({ iconName, size }) => {
    switch (iconName) {
        case "HTML":
            return <DiHtml5 size={size} />;
        case "CSS":
            return <DiCss3 size={size} />;
        case "Javascript":
            return <DiJsBadge size={size} />;
        case "ReactJS":
            return <DiReact size={size} />;
        case "ReactNative":
            return <DiReact size={size} />;
        case "Redux":
            return <svg
                width={size}
                height={size}
                viewBox="0 0 256 244"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
            >
                <path
                    d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
                    fill="#764ABC"
                />
            </svg>;
        case "MongoDB":
            return <DiMongodb size={size} />;
        case "NodeJS":
            return <svg
                width={size}
                height={size}
                viewBox="0 0 256 282"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
            >
                <g fill="#8CC84B">
                    <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
                    <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
                </g>
            </svg>;
        case "GraphQL":
            return <svg
                width={size}
                height={size}
                viewBox="0 0 256 288"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
            >
                <path
                    d="M152.576 32.963l59.146 34.15a25.819 25.819 0 0 1 5.818-4.604c12.266-7.052 27.912-2.865 35.037 9.402 7.052 12.267 2.865 27.912-9.402 35.037a25.698 25.698 0 0 1-6.831 2.72v68.325a25.7 25.7 0 0 1 6.758 2.702c12.34 7.125 16.527 22.771 9.402 35.038-7.052 12.266-22.771 16.453-35.038 9.402a25.464 25.464 0 0 1-6.34-5.147l-58.786 33.94a25.671 25.671 0 0 1 1.295 8.08c0 14.103-11.458 25.636-25.635 25.636-14.177 0-25.635-11.46-25.635-25.636 0-2.52.362-4.954 1.037-7.253l-59.13-34.14a25.824 25.824 0 0 1-5.738 4.52c-12.34 7.051-27.986 2.864-35.038-9.402-7.051-12.267-2.864-27.913 9.402-35.038a25.71 25.71 0 0 1 6.758-2.703v-68.324a25.698 25.698 0 0 1-6.831-2.72C.558 99.897-3.629 84.178 3.423 71.911c7.052-12.267 22.77-16.454 35.037-9.402a25.82 25.82 0 0 1 5.79 4.575l59.163-34.159a25.707 25.707 0 0 1-1.048-7.29C102.365 11.46 113.823 0 128 0c14.177 0 25.635 11.459 25.635 25.635 0 2.548-.37 5.007-1.059 7.328zm-6.162 10.522l59.287 34.23a25.599 25.599 0 0 0 2.437 19.831c3.609 6.278 9.488 10.44 16.013 12.062v68.41c-.333.081-.664.17-.993.264L145.725 44.17c.234-.224.464-.452.689-.684zm-36.123.7l-77.432 134.11a25.824 25.824 0 0 0-1.01-.27v-68.417c6.525-1.622 12.404-5.784 16.013-12.062a25.6 25.6 0 0 0 2.427-19.869l59.27-34.22c.239.247.483.49.732.727zm24.872 6.075l77.414 134.08a25.492 25.492 0 0 0-4.513 5.757 25.7 25.7 0 0 0-2.702 6.758H50.64a25.71 25.71 0 0 0-2.704-6.758 25.825 25.825 0 0 0-4.506-5.724l77.429-134.107A25.715 25.715 0 0 0 128 51.27c2.487 0 4.89-.352 7.163-1.01zm11.795 194.478l58.902-34.008a25.865 25.865 0 0 1-.473-1.682H50.607c-.082.333-.171.663-.266.992l59.19 34.175A25.558 25.558 0 0 1 128 236.373a25.564 25.564 0 0 1 18.958 8.365z"
                    fill="#E535AB"
                    fillRule="evenodd"
                />
            </svg>;
        case "GraphQLPlayground":
            return <svg
                width={size}
                height={size}
                viewBox="0 0 256 288"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
            >
                <path
                    d="M152.576 32.963l59.146 34.15a25.819 25.819 0 0 1 5.818-4.604c12.266-7.052 27.912-2.865 35.037 9.402 7.052 12.267 2.865 27.912-9.402 35.037a25.698 25.698 0 0 1-6.831 2.72v68.325a25.7 25.7 0 0 1 6.758 2.702c12.34 7.125 16.527 22.771 9.402 35.038-7.052 12.266-22.771 16.453-35.038 9.402a25.464 25.464 0 0 1-6.34-5.147l-58.786 33.94a25.671 25.671 0 0 1 1.295 8.08c0 14.103-11.458 25.636-25.635 25.636-14.177 0-25.635-11.46-25.635-25.636 0-2.52.362-4.954 1.037-7.253l-59.13-34.14a25.824 25.824 0 0 1-5.738 4.52c-12.34 7.051-27.986 2.864-35.038-9.402-7.051-12.267-2.864-27.913 9.402-35.038a25.71 25.71 0 0 1 6.758-2.703v-68.324a25.698 25.698 0 0 1-6.831-2.72C.558 99.897-3.629 84.178 3.423 71.911c7.052-12.267 22.77-16.454 35.037-9.402a25.82 25.82 0 0 1 5.79 4.575l59.163-34.159a25.707 25.707 0 0 1-1.048-7.29C102.365 11.46 113.823 0 128 0c14.177 0 25.635 11.459 25.635 25.635 0 2.548-.37 5.007-1.059 7.328zm-6.162 10.522l59.287 34.23a25.599 25.599 0 0 0 2.437 19.831c3.609 6.278 9.488 10.44 16.013 12.062v68.41c-.333.081-.664.17-.993.264L145.725 44.17c.234-.224.464-.452.689-.684zm-36.123.7l-77.432 134.11a25.824 25.824 0 0 0-1.01-.27v-68.417c6.525-1.622 12.404-5.784 16.013-12.062a25.6 25.6 0 0 0 2.427-19.869l59.27-34.22c.239.247.483.49.732.727zm24.872 6.075l77.414 134.08a25.492 25.492 0 0 0-4.513 5.757 25.7 25.7 0 0 0-2.702 6.758H50.64a25.71 25.71 0 0 0-2.704-6.758 25.825 25.825 0 0 0-4.506-5.724l77.429-134.107A25.715 25.715 0 0 0 128 51.27c2.487 0 4.89-.352 7.163-1.01zm11.795 194.478l58.902-34.008a25.865 25.865 0 0 1-.473-1.682H50.607c-.082.333-.171.663-.266.992l59.19 34.175A25.558 25.558 0 0 1 128 236.373a25.564 25.564 0 0 1 18.958 8.365z"
                    fill="#E535AB"
                    fillRule="evenodd"
                />
            </svg>;
        case "Bootstrap":
            return <DiBootstrap size={size} />;
        case "MaterialUI":
            return <svg
                viewBox="0 0 600 476.30000000000007"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
            >
                <path d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z" fill="#00b0ff" />
                <path
                    d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
                    fill="#0081cb"
                />
                <path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff" />
                <path
                    d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z"
                    fill="#0081cb"
                />
            </svg>;
        case "TailwindCSS":
            return <svg
                height={size}
                preserveAspectRatio="xMidYMid"
                width={size}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 153.6"
            >
                <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
                    <stop offset="0" stopColor="#2298bd" />
                    <stop offset="1" stopColor="#0ed7b5" />
                </linearGradient>
                <path
                    d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                    fill="url(#a)"
                />
            </svg>;
        case "Apollo":
            return <svg
                height={size}
                viewBox="26.69 28.9 1173.9 1144.1"
                width={size}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="m599.49 29.7c-2.2.1-10.5.8-18.5 1.4-100 7.4-201.4 44.4-284.5 103.8-27.5 19.6-49.2 38-73.4 62.2-139.1 139.2-196.4 338.4-152.9 531.9 17.8 79.4 55.8 159.3 106.2 223.5 79.1 100.9 187.5 172 309.1 202.8 49.5 12.6 90.6 17.7 142.5 17.7 51.2 0 88.9-4.6 137.7-16.5 70.1-17.2 131.7-45.5 193.3-88.6 59-41.4 113.9-99.4 153.3-161.9 50.8-80.8 79.7-170 86.8-267.9 1.5-20.6.6-71.6-1.6-92.6-4.4-41.7-15.6-96.7-22.1-108.2-2.6-4.5-9.9-10.3-15.3-12.2-1.9-.6-6.1-1.1-9.5-1.1-15 0-27.6 12.5-27.6 27.2 0 3.5 1.6 11.9 3.9 21 19.8 77 21.4 161.6 4.5 238.8-21.6 98.9-69.8 186.1-142.5 257.6-33.9 33.3-66.6 57.9-108.9 82.1-98.7 56.5-221.4 77.9-336.5 58.7-87.4-14.5-163.3-48.1-235.4-104.2-33.9-26.4-75.2-69.9-100.8-106.3-44.2-62.8-72-129-86.4-205.9-7.3-39.2-9.8-91.2-6.4-133.5 5.2-64.2 21.3-123.8 48.6-180.3 12.6-26.3 20.4-40 35.5-62.7 30.8-46.6 71.6-90.2 116.7-124.8 52.9-40.7 115.7-71.6 179.2-88.2 34.3-9 61.7-13.5 96.5-16 125.9-9 248.3 27.2 348 103.1 7.4 5.6 15.2 11.7 17.3 13.6l3.8 3.3-1.5 4.2c-7.7 21.6-2 48.5 14.2 67.3 8.3 9.6 23.3 18.6 36 21.6 8.7 2.1 23.8 2.1 32.6 0 22.3-5.3 43.1-24.4 49.7-45.6 7.4-23.7 3.1-47.1-12.1-66.1-16.8-21-45.7-30.4-72.4-23.4l-5.8 1.5-8.2-6.8c-33.3-27.9-73.6-53.7-116-74.2-68.8-33.3-137.9-51.2-216.6-56-15.1-.9-50.8-1.1-60.5-.3z" />
                <path d="m540.29 358.7c-10.6 27.4-33.6 87.4-51.3 133.3s-54 140.2-80.7 209.5c-26.6 69.3-48.7 126.3-48.9 126.7-.3.5 27.8.8 62.3.8h62.9l3.7-10.3c2.1-5.6 9.5-25.4 16.4-44l12.6-33.7h94.4c75.2 0 94.4-.3 94.1-1.3-1-2.7-16.4-46.7-24.6-70.2l-8.8-25-62.5-.5-62.4-.5 40.6-111.9c24.4-67.2 40.9-111.2 41.2-110.2.4.9 16.6 47 36.1 102.4s51.7 146.6 71.5 202.7l35.9 102 62.6.3c34.4.1 62.6 0 62.6-.2s-8.1-21.5-18.1-47.2c-10-25.8-31.4-81.3-47.6-123.4s-34.4-89.3-40.5-105c-6-15.7-16.5-42.9-23.3-60.5s-24.5-63.7-39.5-102.5-28.1-72.9-29.2-75.8l-1.9-5.2h-138.5z" />
            </svg>;
        case "Docker":
            return <svg
                height={size}
                width={size}
                fill="#00b0ff"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
            >
                <g>
                    <path
                        className="st0"
                        d="M501.4,212.3c-11.5-8-38-11-58.6-7c-2.4-20-13.5-37.5-32.7-53l-11-8l-7.7,11.5c-9.6,15-14.4,36-13,56 c0.5,7,2.9,19.5,10.1,30.5c-6.7,4-20.7,9-38.9,9H2.3l-1,4c-3.4,20-3.4,82.5,36,130.5c29.8,36.5,74,55,132.1,55 c125.9,0,219.1-60.5,262.8-170c17.3,0.5,54.3,0,73-37.5c0.5-1,1.4-3,4.8-10.5l1.9-4L501.4,212.3z M280,71.3h-52.8v50H280V71.3z M280,131.3h-52.8v50H280V131.3z M217.5,131.3h-52.8v50h52.8V131.3z M155.1,131.3h-52.8v50h52.8V131.3z M92.6,191.3H39.8v50h52.8 V191.3z M155.1,191.3h-52.8v50h52.8V191.3z M217.5,191.3h-52.8v50h52.8V191.3z M280,191.3h-52.8v50H280V191.3z M342.4,191.3h-52.8 v50h52.8V191.3z"
                    />
                </g>
            </svg>;
        case "Firebase":
            return <DiFirebase size={size} />;
        case "ReactRouterDom":
            return <svg
                width={size}
                height={size}
                viewBox="0 0 256 140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
            >
                <path
                    d="M190.318 91.214c-4.826 1.575-10.015 2.059-15.056 2.942-1.372.24-2.82.026-4.205.218-10.753 1.492-14.816 5.799-16.335 17.249-.808 6.095-2.412 11.888-5.91 17.074-5.91 8.759-17.391 12.734-27.217 9.312-10.518-3.663-16.89-13.25-16.04-24.135.766-9.807 8.512-18.471 19.39-20.989 5.094-1.179 10.379-1.64 15.605-2.116 9.755-.887 14.064-5.164 15.689-14.756.935-5.519.102-10.726-1.122-15.932-1.87-7.957-7.663-11.654-17.39-12.362-5.308-.387-10.708-1.157-15.787-2.683-10.692-3.215-16.917-12.497-16.424-23.386.432-9.535 8.197-18.819 17.524-20.951 11.05-2.527 22.05 1.892 26.75 11.733 2.466 5.164 3.82 11.014 4.786 16.705 1.729 10.204 5.783 14.163 15.96 15.269 6.583.716 13.29 1.532 19.567 3.496 9.532 2.983 15.258 11.866 15.256 21.738-.001 9.657-5.911 18.595-15.041 21.574z"
                    fill="#62DAFB"
                />
                <path
                    d="M78.072 92.782c-12.778.002-23.21-10.427-23.212-23.203-.002-12.777 10.427-23.21 23.203-23.212 12.777-.002 23.209 10.427 23.211 23.203.002 12.777-10.427 23.21-23.202 23.212zM23.13 139.2C10.363 139.168-.032 128.703 0 115.915c.032-12.767 10.496-23.162 23.284-23.129 12.767.031 23.162 10.496 23.13 23.284-.032 12.767-10.496 23.162-23.284 23.13zM232.962 139.2c-12.8.073-23.309-10.28-23.382-23.033-.073-12.799 10.28-23.309 23.033-23.381 12.8-.074 23.308 10.278 23.382 23.032.073 12.799-10.28 23.309-23.033 23.382z"
                    fill="#424242"
                />
            </svg>;
        case "AWS_EC2":
            return <svg
                width={size}
                height={size}
                viewBox="0 0 256 310"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
            >
                <path
                    d="M42.754 244.495l-29.918 6.826V57.565l29.918 6.839v180.091"
                    fill="#F68536"
                />
                <path
                    d="M80.082 255.931l-37.328 10.608V42.612l37.328 10.595v202.724M127.966 267.681l-47.884 17.524V23.946l47.884 17.516v226.219M256 245.079l-128.034 64.017V0L256 64.017v181.062"
                    fill="#F68536"
                />
                <path
                    d="M102.444 12.763L127.966 0v309.096l-25.522-12.759V12.763M60.325 33.82l19.757-9.878v261.212l-19.757-9.878V33.82M27.016 50.477l15.738-7.869v223.88l-15.738-7.874V50.477M12.836 57.565L0 63.983v181.134l12.836 6.414V57.565"
                    fill="#9D5025"
                />
            </svg>;
        case "Heroku":
            return <DiHeroku size={size} />;
        case "VSCode":
            return <DiVisualstudio size={size} />;
        case "GitHub":
            return <DiGithubBadge size={size} />;
        case "ChromeDevTools":
            return <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 435.816 437.46"
            >
                <path
                    d="M217.341.039s128.478-5.783 196.57 123.337H206.416s-39.188-1.289-72.593 46.255c-9.634 19.916-19.91 40.473-8.349 80.937C108.773 222.309 36.823 97.04 36.823 97.04S87.578 5.176 217.341.039z"
                    fill="#c6352e"
                />
                <path
                    d="M407.223 327.871s-59.247 114.143-205.118 108.533c17.995-31.148 103.772-179.682 103.772-179.682s20.709-33.289-3.744-85.991c-12.431-18.305-25.09-37.486-65.919-47.713 32.836-.326 177.285.021 177.285.021s54.168 89.891-6.276 204.832z"
                    fill="#f4d911"
                />
                <path
                    d="M28.373 328.738s-69.224-108.395 8.58-231.908c17.979 31.16 103.71 179.72 103.71 179.72s18.469 34.578 76.341 39.756c22.061-1.609 45.007-2.982 74.279-33.223-16.139 28.594-88.673 153.521-88.673 153.521S97.681 438.56 28.373 328.738z"
                    fill="#81b354"
                />
                <path
                    d="M202.105 437.46l29.187-121.793s32.092-2.504 58.982-32.017c-16.693 29.365-88.169 153.81-88.169 153.81z"
                    fill="#7baa50"
                />
                <path
                    d="M119.59 220.093c0-53.69 43.52-97.215 97.215-97.215 53.69 0 97.214 43.524 97.214 97.215 0 53.693-43.522 97.219-97.214 97.219-53.695 0-97.215-43.525-97.215-97.219z"
                    fill="#fff"
                />
                <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x1="-829.128"
                    y1="1417.339"
                    x2="-829.128"
                    y2="1261.441"
                    gradientTransform="matrix(1 0 0 -1 1045.93 1557.636)"
                >
                    <stop offset="0" stopColor="#a2c0e6" />
                    <stop offset="1" stopColor="#406cb1" />
                </linearGradient>
                <path
                    d="M135.86 220.093c0-44.702 36.238-80.941 80.945-80.941 44.698 0 80.94 36.239 80.94 80.941 0 44.703-36.242 80.945-80.94 80.945-44.707.001-80.945-36.244-80.945-80.945z"
                    fill="url(#a)"
                />
                <path
                    d="M413.5 123.039l-120.183 35.237s-18.123-26.596-57.104-35.258c33.776-.115 177.287.021 177.287.021z"
                    fill="#e7ce12"
                />
                <path
                    d="M123.137 246.197c-16.89-29.25-86.31-149.16-86.31-149.16l89.029 88.07s-9.149 18.82-5.68 45.7l2.961 15.39z"
                    fill="#bc332c"
                />
            </svg>;
        case "NextJS":
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={size}
                height={size} viewBox="0 0 15 15"><path d="m4.5 4.5.40534-.29275c-.12698-.17581-.35282-.24972-.55917-.183-.20636.06673-.34617.25888-.34617.47575zm3 9.5c-3.58985 0-6.5-2.9101-6.5-6.5h-1c0 4.1421 3.35786 7.5 7.5 7.5zm6.5-6.5c0 3.5899-2.9101 6.5-6.5 6.5v1c4.1421 0 7.5-3.3579 7.5-7.5zm-6.5-6.5c3.5899 0 6.5 2.91015 6.5 6.5h1c0-4.14214-3.3579-7.5-7.5-7.5zm0-1c-4.14214 0-7.5 3.35786-7.5 7.5h1c0-3.58985 2.91015-6.5 6.5-6.5zm-2.5 12v-7.5h-1v7.5zm-.90534-7.20725 6.50004 8.99995.8106-.5854-6.49996-9.00005zm5.90534-.79275v6h1v-6z" fill="#000" />
            </svg>
        case "NestJS":
            return <svg xmlns="http://www.w3.org/2000/svg" height={size} preserveAspectRatio="xMidYMid" viewBox="0 0 256 255" width={size}><path d="m150.735739 0c-1.851139 0-3.570052.39668612-5.156759.92557229 3.371712 2.24781535 5.222861 5.22289318 6.148461 8.5946162.066297.46277949.198338.79335791.264533 1.25612201.066297.3966862.132144.793358.132144 1.190042.264574 5.8178758-1.520615 6.5451107-2.776728 9.9829567-1.917272 4.4295476-1.38839 9.1896337.925559 13.0241628.198348.4627672.46279.9916667.793374 1.4544595-2.512307-16.7264396 11.437446-19.2387114 14.015795-24.461579.198338-4.56176498-3.570052-7.60293619-6.545098-9.71853511-2.84283-1.71891689-5.421251-2.24781739-7.801281-2.24781739zm21.023743 3.76840811c-.264554 1.52058152-.066195 1.12390768-.132113 1.91726456-.066195.5288872-.066195 1.19002766-.132124 1.71891485-.132123.52890152-.264574 1.05778872-.46281 1.58671377-.132113.5288872-.330554 1.05778771-.528882 1.58667391-.264574.528926-.46279.9916933-.727241 1.5205927-.198328.2645587-.330554.5288872-.528892.7933569-.132124.1983354-.264554.3966718-.396667.5950072-.330554.4628051-.661138.9255723-.991682 1.322243-.396697.3966862-.727251.8594524-1.190062 1.190042v.0661947c-.396666.3305641-.793343.7272359-1.256112 1.0577877-1.38837 1.0577867-2.975046 1.8511425-4.429539 2.8428348-.462759.3305518-.925579.5950225-1.322236.9916923-.462779.3305518-.859466.6611036-1.256123 1.0577876-.46281.3966718-.793364.7933559-1.190051 1.2561477-.330554.3966851-.72722.8594543-.991661 1.3222584-.330585.4627662-.661129.92556-.9256 1.3883385-.264544.5288861-.46278.9916912-.727231 1.5205794-.198328.5288862-.396687.9916933-.528892 1.5205785-.198339.5950215-.330565 1.123922-.46279 1.6528347-.066195.2645567-.066195.5949949-.132123.8594513-.066297.2645577-.066297.5288872-.132114.7933569 0 .5288862-.066194 1.1239077-.066194 1.6527949 0 .3966841 0 .7933548.066194 1.1900399 0 .5288882.066195 1.0577765.198329 1.6527959.066194.5288862.198318 1.0577867.330584 1.5867128.198339.5288861.330564 1.0577866.528882 1.5866738.132144.3305907.330554.6611415.46281.9255723l-15.205866-5.8839999c-2.5784-.7272358-5.090646-1.3883384-7.669046-1.9833599-1.388348-.3305508-2.776697-.6611262-4.165066-.9916913-3.966759-.7933436-7.99958-1.3883395-12.032451-1.7850103-.132113 0-.198329-.0662049-.330554-.0662049-3.966769-.3966707-7.867374-.5950071-11.834113-.5950071-2.908964 0-5.8179278.1321141-8.6607595.3305518-4.0328594.2645577-8.0657249.7933558-12.0985567 1.4544584-.9916943.1321275-1.9833866.3305897-2.9750819.5289271-2.0494759.3966452-4.0328318.8594503-5.9500943 1.3222421-.9916923.2645576-1.9833866.5289005-2.9750799.7933323-.9916615.3966697-1.9172308.8594769-2.8428327 1.2561476-.7272318.3305518-1.4544605.6611149-2.1816933.9916923-.1321223.0662049-.2645536.0662049-.3305539.1321274-.6611384.3305508-1.2561538.5949816-1.8511395.9255703-.1983394.0662049-.3305866.1321151-.4628009.1983374-.7272308.3305528-1.4544595.7272236-2.049478 1.0577867-.4627999.1983364-.9255692.4627928-1.3222451.6611414-.1983405.1321142-.462803.2645454-.5950174.3305519-.5950143.3305518-1.1900307.6611015-1.718924.9916922-.5950164.3305508-1.1239097.6611026-1.5867097.9916544-.4627672.3305897-.9255662.5950205-1.3222461.9255713-.0662356.0662049-.1321223.0662049-.1983395.1321285-.3966759.2645566-.8594452.5950061-1.256121.9255958 0 0-.0662254.0661946-.1321234.1321253-.3305538.2645577-.6611404.5288893-.9916933.7933201-.1321212.0662049-.2645546.1983354-.3966769.2645566-.3305538.2645598-.6611077.5950215-.9916626.8594769-.0662253.1321264-.1983374.1983364-.2645546.2645587-.3966769.3966718-.7933548.7272226-1.1900317 1.1239077-.0662254 0-.0662254.0662049-.1321223.1321141-.3966769.3305641-.7933528.7272369-1.1900297 1.123921-.0662254.0662049-.0662254.1321131-.1321233.1321131-.3305539.3305528-.6611078.6611414-.9916933 1.0577866-.1321203.1321264-.3305539.2645598-.4627683.3966718-.3305538.3966851-.7272318.7933569-1.1239076 1.190042-.0662254.1321151-.1983385.1983364-.2645557.3305508-.5288943.5289261-.9916943 1.0578133-1.5205866 1.5867127-.0662254.0662049-.1321213.1321111-.1983374.1983365-1.0578164 1.1239066-2.1817261 2.2478143-3.3717271 3.2394994-1.1900297 1.0577846-2.4461559 2.0494769-3.7023086 2.9089333-1.3222482.9255999-2.5783713 1.718923-3.9667415 2.5122768-1.3222482.7272103-2.7106173 1.388359-4.1650789 1.9833846-1.3883712.5950051-2.8428317 1.1239179-4.2972963 1.5866769-2.7767394.5950051-5.6195732 1.718923-8.065728 1.9172615-.5288923 0-1.1239087.1321335-1.652802.1983282-.5950133.1321233-1.1239067.2645638-1.652799.3966974-.5288933.198318-1.0578163.3966667-1.5867107.5949949-.5288933.1983384-1.05778563.4627999-1.58667897.7272512-.46279995.3305436-.99169124.5950051-1.45449324.925559-.46277131.3305539-.92557127.7272205-1.3222492 1.1239077-.46276824.3305845-.9255682.793364-1.32224613 1.1900205-.39667793.4628204-.79335381.8594871-1.12390808 1.3222461-.33055396.5288923-.72723159.9917025-.99169391 1.520605-.33055386.4628-.66110761.9916821-.92556993 1.5205539-.26455512.5950461-.52889211 1.1239282-.72723149 1.7189538-.19833835.5288923-.3966768 1.1238974-.59501525 1.718923-.13212149.5288821-.26455492 1.0577846-.33055366 1.5866565 0 .0662969-.0662141.1321438-.0662141.1983486-.13212251.5950461-.13212251 1.3884101-.19833928 1.7850973-.0662141.4627693-.13212056.8594257-.13212056 1.3222359 0 .2645536 0 .5949847.0662141.8594359.06621411.4628102.13212036.8594769.26455502 1.2561845.13212148.3966155.26455512.7933026.46276937 1.1899898v.0661947c.19833835.3967076.46280057.793364.72723158 1.1900409.26455501.3966769.52892341.7933538.85947727 1.190041.33055376.3305538.72723169.7272 1.12390809 1.0577744.39667782.3966769.79335596.7272307 1.2561242 1.0577846 1.58670865 1.3883794 1.98338556 1.8511793 4.03286757 2.9089537.33055079.1983487.66113841.3305744 1.05781532.5289128.06622536 0 .1321223.0661947.19833738.0661947 0 .1321131 0 .1983487.0662254.3305948.0662151.5289025.1983374 1.0577744.3305539 1.5866871.1321212.5950154.3305855 1.1239282.528924 1.5866971.1983384.396687.3305539.793344.5288933 1.190041.0662152.132134.1321234.264554.1983385.330554.2645546.528882.5288923.991713.7933231 1.454462.3305856.462779.6611384.925559.9916913 1.388379.3305559.396657.7272338.859446 1.1239097 1.256113.3966779.396687.7933558.727251 1.2561568 1.123897 0 0 .0662254.066297.1321203.066297.3966789.330585.7933538.661149 1.1900327.925559.4627693.330575.9255693.595005 1.4544605.859477.462801.264554.9916944.528893 1.5205867.727241.3966779.198339.8594461.330575 1.3222481.46279.0662254.066297.1321213.066297.2645557.132144.2645546.066297.5949826.132103.8594451.198318-.1983374 3.570061-.2645556 6.941784.2645567 8.131835.5949846 1.322236 3.5039394-2.710615 6.4128963-7.338471-.3966759 4.561753-.6611395 9.91682 0 11.503558.7272297 1.65277 4.6939711-3.503989 8.1318182-9.189651 46.8736626-10.842389 89.6484288 21.552656 94.1440488 67.302409-.859466-7.140143-9.65241-11.106871-13.68524-10.115169-1.983395 4.892297-5.355118 11.172964-10.776318 15.0736.462779-4.363426.264533-8.859046-.661118-13.222482-1.454492 6.082349-4.297333 11.768041-8.1979793 16.660338-6.2806737.462769-12.5613627-2.57841-15.8669944-7.140133-.2645557-.198359-.3305549-.595026-.5288934-.859467-.1983405-.46283-.3966759-.925569-.5288933-1.388379-.1983374-.462769-.3305528-.925569-.3966759-1.388339-.0662253-.46281-.0662253-.925589-.0662253-1.454471 0-.330585 0-.661129 0-.991672.0662253-.462831.1983384-.92561.3305548-1.3884.1321213-.462769.2645536-.925569.4628-1.388359.2645556-.462759.4627693-.925559.7933548-1.388328 1.1239077-3.173436 1.1239077-5.751795-.9255692-7.272369-.3966779-.264554-.7933548-.46281-1.2561548-.661149-.2645577-.066195-.5950174-.198338-.8594462-.264543-.1983394-.066195-.3305538-.132144-.5288933-.198349-.462801-.132123-.925602-.264564-1.3883712-.330554-.4628-.132113-.9255692-.198338-1.3883692-.198338-.4627703-.066297-.9916953-.132124-1.4544636-.132124-.3305528 0-.6611384.066195-.9916933.066195-.5288913 0-.9916912.066297-1.4544625.198339-.4628.066297-.9255682.132113-1.3883682.264533-.4627713.132133-.9255723.264563-1.3883722.46283-.4627683.198329-.8594472.396667-1.3222451.595005-.3966462.198349-.7933252.46277-1.2561241.661108-15.4041955 10.049077-6.2145589 33.585087 4.2972963 40.394666-3.9667435.727231-7.9995763 1.586728-9.123486 2.446154-.0662254.066194-.1321213.132133-.1321213.132133 2.8428328 1.718903 5.817883 3.173385 8.9251445 4.429508 4.231205 1.388369 8.7268367 2.644502 10.7102223 3.173415v.066195c5.487327 1.123918 11.0407792 1.520595 16.6603268 1.190041 29.2878043-2.049487 53.2866043-24.329384 57.6500293-53.683271.132123.595026.264554 1.123898.396677 1.718934.198349 1.189989.462769 2.446133.594985 3.702266v.066297c.132123.595015.198338 1.190021.264553 1.718913v.264564c.066297.595005.132134 1.19003.132134 1.718913.066194.727241.132123 1.454461.132123 2.181733v1.057784c0 .330585.066195.727221.066195 1.057805 0 .396688-.066195.793334-.066195 1.190011v.925569c0 .46281-.066297.859467-.066297 1.322256 0 .264533 0 .528903-.066195.859467 0 .46281-.066194.925559-.066194 1.454461-.066297.198339-.066297.396677-.066297.595026-.066195.528903-.132124.991692-.198349 1.520595 0 .198349 0 .396667-.066195.595025-.066297.661098-.198328 1.256134-.264522 1.917231v.066297.066195c-.132124.595005-.264574 1.256123-.396708 1.851128v.198349c-.132103.594995-.264554 1.190031-.396656 1.785015 0 .066297-.066195.198349-.066195.264533-.132144.595036-.264574 1.190041-.462769 1.785087v.198318c-.198339.661098-.396688 1.256123-.528923 1.851139-.066195.066194-.066195.132123-.066195.132123-.198349.661139-.396667 1.322246-.594985 1.983364-.264553.661139-.462789 1.256144-.727231 1.917272-.264543.661128-.46281 1.322256-.727251 1.917251-.264564.661149-.528913 1.256164-.793343 1.917262h-.066297c-.264574.595005-.528934 1.256153-.859508 1.851179-.066195.198308-.132103.330554-.198318.462749-.066195.066297-.066195.132123-.132123.198359-4.297292 8.660697-10.644113 16.26362-18.577569 22.213753-.528892.330554-1.057805.727241-1.586687 1.123898-.132134.132133-.330585.198358-.4628.330553-.4628.330564-.92558.661108-1.454451.991703l.198328.396677h.066194c.925559-.132113 1.851139-.264554 2.776718-.396677h.066195c1.718933-.264554 3.437856-.595015 5.15679-.925569.462759-.066297.991692-.198329 1.454451-.330585.330554-.066297.595015-.132113.925569-.198338.4628-.066297.92558-.198339 1.38839-.264544.396656-.132123.793343-.198359 1.19001-.330564 6.611231-1.586718 13.024154-3.768441 19.172564-6.3468-10.511836 14.346369-24.593795 25.916051-41.055774 33.518974 7.602944-.528903 15.205856-1.785026 22.544328-3.900615 26.643302-7.867415 49.055383-25.783846 62.476193-49.914871-2.710605 15.271979-8.792943 29.816697-17.784215 42.510286 6.412893-4.23123 12.296892-9.123538 17.652-14.676974 14.809169-15.470287 24.527712-35.10564 27.833302-56.195537 2.247836 10.445764 2.908964 21.222123 1.917272 31.866194 47.733147-66.575178 3.966738-135.5965095-14.346379-153.7774127-.066297-.1321162-.132124-.1983364-.132124-.3305528-.066297.0661946-.066297.0661946-.066297.1321274 0-.0662049 0-.0662049-.066194-.1321274 0 .7933558-.066195 1.5866749-.132124 2.3800317-.198348 1.5205846-.396666 2.9750554-.661138 4.4295476-.330544 1.4544615-.727231 2.9089026-1.123918 4.363405-.462769 1.3883385-.991641 2.8428103-1.586677 4.2311897-.595015 1.3222257-1.256144 2.7105948-1.983374 4.0328614-.727241 1.2561436-1.520585 2.5783795-2.380031 3.7683897-.859467 1.256164-1.785046 2.4461641-2.710636 3.5700513-.991702 1.1900512-2.049467 2.2478562-3.107282 3.3056511-.661108.5950154-1.256113 1.1239077-1.917272 1.6527795-.528882.4628102-.991661.8594974-1.520584 1.3222462-1.19001.9255794-2.380031 1.785046-3.702267 2.5784101-1.256143.7933333-2.578359 1.5866872-3.900615 2.2478256-1.388369.6611179-2.776738 1.256123-4.165087 1.8511486-1.388369.5288719-2.842831.9916718-4.297344 1.388359-1.454451.3966564-2.975025.7272307-4.429507.9916718-1.520564.2645536-3.041159.3966667-4.495631.5289128-1.057805.0661946-2.11559.1321335-3.173405.1321335-1.520595 0-3.041149-.1321335-4.495631-.2645536-1.520574-.1321233-3.041179-.330605-4.495641-.6611588-1.520584-.2645536-2.975076-.6611384-4.429548-1.1238873h-.066195c1.454472-.1321233 2.908954-.264574 4.363446-.5289127 1.520554-.2645536 2.975026-.5949949 4.429518-.9917025 1.454462-.3966667 2.908933-.8594667 4.297292-1.3883487 1.454462-.5289026 2.842841-1.1900001 4.165098-1.8511589 1.388348-.6611385 2.644492-1.3883488 3.966728-2.1817026 1.256123-.8594564 2.512266-1.7189025 3.702287-2.6445025 1.190031-.9255589 2.313918-1.9172308 3.371754-2.9750358 1.123907-.9917128 2.115579-2.1156102 3.107271-3.2395281.991662-1.1899898 1.917252-2.3800205 2.776718-3.5700513.132134-.1983486.264564-.4627692.396698-.6611179.661097-1.0578051 1.322205-2.1156 1.91721-3.1734153.727251-1.3222461 1.38839-2.6445025 1.983384-4.0328307.595026-1.3883692 1.123929-2.7767486 1.586718-4.2311999.46277-1.3883794.793334-2.8428307 1.123908-4.2972902.264564-1.5205928.528882-2.975087.661118-4.4295465.132123-1.5205785.264543-3.0411722.264543-4.4956297 0-1.0578133-.066297-2.1155999-.132103-3.1733876-.132133-1.5205805-.330574-2.9750768-.528902-4.4295373-.264564-1.5205918-.595005-2.9750492-.991703-4.4295476-.462759-1.3883395-.925569-2.8428246-1.454451-4.231162-.528933-1.3883774-1.19002-2.7767404-1.851179-4.0989978-.727231-1.3222441-1.454452-2.6444882-2.247795-3.9006112-.859457-1.2561231-1.718944-2.4461508-2.644513-3.6361917-.991661-1.1239087-1.983354-2.2478154-3.041179-3.371723-.528882-.5288893-1.123908-1.1239098-1.718913-1.6527959-2.975046-2.3139487-6.082338-4.49567063-9.1896-6.47902755-.462779-.26454744-.859456-.46279177-1.322256-.66114045-2.181723-1.38834053-4.2312-2.11560097-6.280667-2.77670459z" fill="#e0234e" />
            </svg>
        // case "HTML":
        //     return <DiHtml5 size={size} />;
        default:
            return null
    }
}

export default IconSelector