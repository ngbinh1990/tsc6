import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import './IntroCompany.css';

const IntroCompany = () => {
	return (
		<>
			<Box className='content'>
				<Container>
					<Grid container sx={{ width: '100%', height: '100vh' }} spacing={4}>
						<Grid
							item
							md={3}
							className='background'
							sx={{ position: 'relative', top: '10px', zIndex: '-10' }}></Grid>
						<Grid item md={9}>
							<Typography
								color={'#1a47ac'}
								sx={{ fontSize: '2rem', fontWeight: '600' }}>
								THƯ NGỎ
							</Typography>
							<Typography
								sx={{
									textIndent: '50px',
									marginTop: '20px',
									fontSize: '1.2rem',
								}}>
								Kính gửi Quý khách hàng!
							</Typography>
							<Typography
								sx={{
									textIndent: '50px',
									marginTop: '20px',
								}}>
								Công ty Cổ phần dịch vụ thương mại và Sàn Bất động sản Handico 6
								được thành lập năm 2009, chuyên cung cấp các dịch vụ quản lý và
								khai thác các dự án bất động sản.
							</Typography>
							<Typography
								sx={{
									textIndent: '50px',
									marginTop: '20px',
								}}>
								Trải qua hành trình hơn 10 năm, với tiềm lực tài chính tốt và ổn
								định cùng phương pháp quản trị doanh nghiệp khoa học, TSC6 đã
								khẳng định được vị thế công ty cung cấp dịch vụ quản lý bất động
								sản chuyên nghiệp tại Việt Nam.
							</Typography>
							<Typography
								sx={{
									textIndent: '50px',
									marginTop: '20px',
								}}>
								Với định hướng phát triển công ty thành một biểu tượng niềm tin
								hàng đầu về các dịch vụ quản lý và khai thác bất động sản, TSC6
								luôn lấy khách hàng làm trung tâm, không ngừng phấn đấu để mang
								đến sự hài lòng cho khách hàng bằng sự chuyên nghiệp và tận tâm.
							</Typography>
							<Typography
								sx={{
									textIndent: '50px',
									marginTop: '20px',
								}}>
								Sáng tạo và cải tiến là động lực để TSC6 phát triển, tạo ra các
								sản phẩm dịch vụ chất lượng cao, có bản sắc riêng; “Chăm sóc
								khách hàng là để tồn tại và phát triển” là tôn chỉ hoạt động của
								chúng tôi.
							</Typography>
							<Typography
								sx={{
									textIndent: '50px',
									marginTop: '20px',
								}}>
								Nhân sự của TSC6 được đào tạo chuyên nghiệp, có nhiều năm kinh
								nghiệm và luôn được trau dồi, tu dưỡng đạo đức nghề nghiệp: Liêm
								chính, Trung thực trong ứng xử và trong tất cả các giao dịch;
								Tôn trọng khách hàng, bản thân, đồng nghiệp, Tôn trọng Công ty
								và đối tác; Tuân thủ Luật pháp, Tuân thủ Quy tắc ứng xử và các
								quy chế, chính sách, quy định của Công ty.
							</Typography>
							<Typography
								sx={{
									textIndent: '50px',
									marginTop: '20px',
								}}>
								Với năng lực của TSC6, chúng tôi tin tưởng rằng sẽ mang đến các
								giá trị cao nhất cùng các giải pháp phù hợp với mong muốn của
								Quý khách hàng và đối tác.
							</Typography>
							<Typography
								sx={{
									textIndent: '50px',
									marginTop: '20px',
									fontWeight: 'bold',
								}}>
								Chân thành cảm ơn!
							</Typography>
							<Typography
								sx={{
									textAlign: 'right',
									marginTop: '20px',
									fontSize: '1.2rem',
									fontWeight: 'bold',
								}}>
								BAN GIÁM ĐỐC CÔNG TY TSC6
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default IntroCompany;
