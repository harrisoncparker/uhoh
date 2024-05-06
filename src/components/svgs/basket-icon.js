export default function BasketIcon({ svgClass = '' }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="31" fill="#492421" className={svgClass}>
            <path 
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.152 9.044c.505-4.122 3.315-6.994 6.348-6.994 3.034 0 5.844 2.872 6.349 6.994H14.152Zm-2.01 0C12.666 4.136 16.042.05 20.5.05s7.835 4.086 8.359 8.994h11.999L40 11.666l-5.797 17.736-.45 1.379H7.248l-.451-1.38L1 11.667.143 9.044H12.142Zm20.161 19.737 5.143-15.737.654-2H2.9l.654 2 5.143 15.737h23.605Z" />
        </svg>
    )
} 