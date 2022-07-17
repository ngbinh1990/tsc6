import React from 'react';
import {
	Box,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
} from '@mui/material';

import './About.css';

const About = () => {
	return (
		<>
			<Box className='about'>
				<Container>
					<Grid container spacing={4}>
						<Grid item md={3} sx={{ height: '100vh' }}>
							<Box className='pic1'></Box>
							<Box className='pic2'></Box>
						</Grid>
						<Grid item md={9} sx={{ marginTop: '50px' }}>
							<Stack direction={'column'}>
								<Typography
									sx={{
										textAlign: 'left',
										fontSize: '1.5rem',
										fontWeight: 'bold',
										color: '#1a47ac',
									}}>
									THÔNG TIN CÔNG TY
								</Typography>
								<Typography sx={{ margin: '5px 0px' }}>
									CÔNG TY CỔ PHẦN DỊCH VỤ THƯƠNG MẠI VÀ SÀN BẤT ĐỘNG SẢN HANDICO
									6
								</Typography>
								<Divider sx={{ width: '85%' }} />
								<Typography sx={{ margin: '5px 0px' }}>
									HANDICO 6 REAL ESTATE TRANSACTION CENTER AND TRADING SERVICE
									JOINT STOCK COMPANY
								</Typography>
								<Typography sx={{ margin: '5px 0px', fontWeight: 'bold' }}>
									Địa chỉ trụ sở chính:
								</Typography>
								<Typography sx={{ margin: '5px 0px' }}>
									Tầng 6A, tòa nhà Hỗn hợp, lô đất C1, đường Lê Văn Lương,
									Phường Nhân Chính, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam
								</Typography>
								<Typography sx={{ margin: '5px 0px', fontWeight: 'bold' }}>
									Điện thoại:
								</Typography>
								<Typography sx={{ margin: '5px 0px' }}>
									0911.453186 – 0915.547452 – 0912.287452 E
								</Typography>
								<Typography sx={{ margin: '5px 0px', fontWeight: 'bold' }}>
									Email:
								</Typography>
								<Typography sx={{ margin: '5px 0px' }}>
									tsc6.jsc@gmail.com
								</Typography>
								<Typography sx={{ margin: '5px 0px', fontWeight: 'bold' }}>
									Mã số doanh nghiệp:
								</Typography>
								<Typography sx={{ margin: '5px 0px' }}>0104084452</Typography>
								<Typography sx={{ margin: '5px 0px', fontWeight: 'bold' }}>
									Vốn điều lệ:
								</Typography>
								<Typography sx={{ margin: '5px 0px' }}>
									8.000.000.000 đồng ( Tám tỷ đồng )
								</Typography>
								<Typography sx={{ margin: '5px 0px', fontWeight: 'bold' }}>
									Đại diện pháp lý:
								</Typography>
								<Typography sx={{ margin: '5px 0px' }}>
									Ông. Nguyễn Hà Bắc - Giám đốc Công ty
								</Typography>
								<Typography sx={{ margin: '5px 0px' }}>
									Đơn vị bảo hiểm bên thứ 3: Tổng Công ty cổ phần bảo hiểm Sài
									Gòn – Hà Nội.
								</Typography>
								<Typography sx={{ margin: '5px 0px', fontWeight: 'bold' }}>
									Mức bảo hiểm tối đa:
								</Typography>
								<Typography sx={{ margin: '5px 0px' }}>
									1.000.000.000 VND/mỗi vụ tổn thất.
								</Typography>
							</Stack>
							<Typography
								sx={{
									textAlign: 'left',
									fontSize: '1.5rem',
									fontWeight: 'bold',
									color: '#1a47ac',
									margin: '5px 0',
								}}>
								LĨNH VỰC KINH DOANH
							</Typography>
							<Stack>
								<Typography sx={{ margin: '5px 0px' }}>
									- Kinh doanh bất động sản
								</Typography>
								<Typography sx={{ margin: '5px 0px' }}>
									- Quản lý, khai thác và vận hành các khu chung cư, khu phức
									hợp, tòa nhà văn phòng, khu biệt thự, nhà phố{' '}
								</Typography>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default About;
